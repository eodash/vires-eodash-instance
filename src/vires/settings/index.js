import { SCALAR_PARAM, VECTOR_PARAM } from "../../store/constants";
import { createNormsCache } from "./normsCache";
import { createColorMap } from "../colorMap";
import { getPointCreator, getVectorCreator } from "./featuresCreators";
import { getChartDatasetCreator } from "./chart";

let indexCounter = 0
// todo: move the filtering process as a first step, optimally outside of the function and then pass the visualized params only
/**
 * Description placeholder
 *
 * @param {import("../types").VirEsSettings} settings
 * @param {import("stac-ts").StacLink} info
 * @param {Record<string, number[] | number[][]>} data
 */
export const assignSettings = (
    settings,
    info,
    data
) => {
    const datasetId = info.title ?? "";

    const parameters =  /** @type {import("../types").VirEsSettings[string][string]["info"][]} */(info["vires:parameters"]);



    // collect visible parameters and their settings

    /**
     * Description placeholder
     * @param {string} name - parameter name
     */
    const addParameterToSettings_ = (name) => {

        if (!(datasetId in settings)) {
            settings[datasetId] = {}
        }
        const paramInfo = parameters.find(p => p?.name == name)

        settings[datasetId][name] = {
            // timestamp: [from.value, to.value],
            info: paramInfo,
            dataset: datasetId,
            outlines: false,
            outline_color: false,
            alpha: 1,
            index: indexCounter++,
            colormap: createColorMap(
                //@ts-expect-error
                paramInfo?.colorscale,
                paramInfo?.range,
                paramInfo?.name,
                paramInfo?.description,
                paramInfo?.uom ?? paramInfo?.units
            ),
        }

    };

    /**
 * Description placeholder
 *
 * @param {string} param
 */
    const addChartSettings_ = (param) => {
        const { chartConfig, createDateset_ } = getChartDatasetCreator(settings[datasetId][param])
        settings[datasetId][param].chart = {
            createDateset: createDateset_,
            configuration: chartConfig
        }
    }
    // parameters from info
    parameters.forEach((paramInfo) => {
        const parameterName = /** @type {string} */(paramInfo?.name)
        if (
            //@ts-expect-error
            !SCALAR_PARAM.includes(parameterName) &&
            //@ts-expect-error
            !VECTOR_PARAM.includes(parameterName)
        ) {
            return;
        }

        if (settings?.[datasetId]?.[parameterName]) {
            // param already exist on the settings
            return
        }


        addParameterToSettings_(parameterName);
        addChartSettings_(parameterName)

    });

    if (!Object.keys(settings).length) {
        return settings;
    }

    // initialize Cesium feature collection and collect additional attributes

    /**
     * Description placeholder
     *
     * @param {string} key
     * @returns {boolean}
     */
    const parameterIsMissing_ = (key) => !parameters.some((val) => val?.name === key)

    /**
     * Description placeholder
     *
     * @param {string} key
     * @returns {boolean}
     */
    const settingsHaveParameter_ = (key) => key in settings[datasetId]


    /**
     * Description placeholder
     *
     * @param {string} param
     */
    const addPointCollection_ = function (param) {
        if (parameterIsMissing_(param)) { return; }
        const { featureCollection, pointCreator } = getPointCreator(datasetId, param)
        settings[datasetId][param] = {
            ...settings[datasetId][param],
            ...({
                isScalar: true,
                featureCollection,
                featureCreator: pointCreator
            }),
        }
    };


    SCALAR_PARAM.filter(settingsHaveParameter_).forEach((parameter) => {
        addPointCollection_(parameter);
    });

    /**
     * Description placeholder
     *
     * @param {string} param
     */
    const addVectorCollection_ = (param) => {
        const { featureCollection, vectorCreator } = getVectorCreator(datasetId, param)
        settings[datasetId][param] = {
            ...settings[datasetId][param],
            isVector: true,
            featureCollection,
            featureCreator: vectorCreator
        }

        //value is array of arrays
        /** @type {number[][]} */
        let componentsData = [[], [], []]
        if (data[param]?.[0] instanceof Array) {
            /** @type {number[][]} */
            (data[param]).reduce((compData, valArr) => {
                valArr.forEach((val, idx) => {
                    compData[idx].push(val)
                })
                return compData
            }, componentsData)
        }

        const norms_ = createNormsCache()
        const normsVals = norms_.getNorms(
            datasetId,
            param,
            componentsData[1].length ? componentsData : [/** @type {number[]} */(data[param])]
        )
        settings[datasetId][param] = {
            ...settings[datasetId][param],
            norms: normsVals.norms,
            maxNorm: normsVals.maxNorm,
            pushToNorms: normsVals.push
        }
    }
    


    VECTOR_PARAM.filter(settingsHaveParameter_).forEach((param) => {
        addVectorCollection_(param);
    });


    Object.keys(settings[datasetId]).forEach((name) => {
        const item = settings[datasetId][name];
        if (!item?.["isVector"] && !item?.["isScalar"]) {
            console.warn("Neither SCALAR_PARAM nor VECTOR_PARAM list contains the " + name + " parameter!")
            delete settings[datasetId][name];
        } else {
            // console.log("found param " + name);
        }
    });

    return settings

};