import {
    DEFAULT_NOMINAL_RADIUS, DEFAULT_POINT_PIXEL_SIZE,
    EARTH_RADIUS,
    HEIGHT_OFFSET, NEAR_FAR_SCALAR, NOMINAL_RADIUS, SCALAR_PARAM_LOGARITMIC
} from "../../../store/constants";
import { convertSpherical2Cartesian } from "./helpers";
import * as Cesium from "cesium"
/**
 * Description placeholder
 *
 * @param {string} parameter
 * @param {string} dataset
 */
export const getPointCreator = (dataset, parameter) => {
    /**
     * @type {import("src/globe/types").Point3DCollection}
     */
    const featureCollection = {
        id: dataset + "_" + parameter,
        type: "Point",
        points: []
    }
    const getColorFn =
        //@ts-expect-error
        SCALAR_PARAM_LOGARITMIC.includes(parameter) ?
            "getLogColor" : "getColor"

    /**
     * Description placeholder
     *
     * @param {Record<string,any>} record
     * @param {import("../../types").VirEsSettings[string][string]} paramSettings
     */
    const pointCreator = (record, paramSettings) => {
        let radius = record.Radius;
        if (paramSettings?.fixedAltitude || radius == null) {
            //@ts-expect-error
            radius = NOMINAL_RADIUS?.[parameter] ??
                DEFAULT_NOMINAL_RADIUS;
        }
        const position = convertSpherical2Cartesian(
            record.Latitude,
            record.Longitude,
            EARTH_RADIUS + 10000
            //  + (paramSettings?.index ?? 0) * HEIGHT_OFFSET
        );
        
        const color = !isNaN(record[parameter]) ? paramSettings.colormap[getColorFn](record[parameter]):"#ffff"
        /** @type {import("../../../globe/types").Point3D} */
        const point = {
            position: Cesium.Cartesian3.clone(position),
            color,
            pixelSize: paramSettings.pixelSize ?? DEFAULT_POINT_PIXEL_SIZE,
            outlineWidth: 0,
            scaleByDistance: NEAR_FAR_SCALAR,
        };

        featureCollection.points.push(point);
    }
    return {
        featureCollection,
        pointCreator
    }
}

