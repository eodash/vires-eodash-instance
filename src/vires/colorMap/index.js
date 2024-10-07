import * as d3 from 'd3'
import { COLOR_SCALES } from './colorscales';

/**
 * Description placeholder
 *
 * @param {import('./types').ColorScaleName} colorscale
 * @param {number[]} range
 * @param {string} [parameter]
 * @param {string} [title]
 * @param {string} [oum]
 */
export const createColorMap = (colorscale, range, parameter, title, oum) => {
// console.log("🚀 ~ createColorMap ~ colorscale, range, parameter, title, oum:", colorscale, range, parameter, title, oum)

    if (!(colorscale in COLOR_SCALES)) {
        console.warn('colorscales doesnt include ' + colorscale)
        colorscale = 'jet'
    }


    /**
     * Description placeholder
     *
     * @param {readonly number[]} positions
     * @param {number} min
     * @param {number} max
     */
    const adaptRange = (positions, min, max) => {
        const range_ = []
        for (const percentage of positions) {
            range_.push((percentage * (max - min)) + min)
        }
        return range_
    }

    const colors = COLOR_SCALES[colorscale].colors
    const positions = COLOR_SCALES[colorscale].positions


    //adapt range to poistions values
    //@ts-expect-error to do: cast number type
    range = adaptRange(positions, range[0], range.at(-1))

    // converts color position value to color string value
    const getColor = d3.scaleLinear(range, colors)
    const getLogColor = d3.scaleLog(range, colors).base(10)

    // to do :
    // const legendScale = d3.scaleLinear()
    //     .domain(range) // Your domain
    //     .range([0, 300]); // The width of your legend

    
    const getLegendCreator = () => {
        /** @type {import('./types').Legend} */
        const legend = {
            range: getColor.range(),
            domain: [positions[0],positions[positions.length - 1]],
            titletext: `${title ? `${title}:` : ""} ${parameter} ${oum ? `(${oum})` : ""}`,
            billboards: []
        } 

        const getLegend = () => legend;
        /** @param {import('./types').Legend["billboards"][number]} billboard */
        getLegend.addBillboard = (billboard) => {
            legend.billboards.push(billboard)
            return getLegend
        }
        return getLegend
    }

    const getLegend = getLegendCreator()

    return {
        getColor,
        getLogColor,
        colorscales:COLOR_SCALES,
        getLegend
    }

}





