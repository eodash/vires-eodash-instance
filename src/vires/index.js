import { from, globeCollections, legends, settings, to } from "../store/states";
import { assignSettings } from "./settings";


/**
 * Description placeholder
 *
 * @export
 * @param {string} dataset
 * @param {Record<string, any>} data
 * @param {import("stac-ts").StacLink} info
 */
export function createDataFeatures(dataset, data, info) {
    // todo
    if (dataset in settings) {
        // console.log("dataset exists:", settings[dataset]);
        const randomParam = Object.keys(settings[dataset])[0]
        const [datasetFrom, datasetTo] = settings[dataset][randomParam]?.timestamp ?? ["", ""]
        if (datasetFrom === from.value && datasetTo === to.value) {
            // param is already visualized on this time
            console.log(`${dataset} already rendered`);
            return settings
        }else{
            // remove collection from globe and continue
            globeCollections.forEach((col,idx,arr)=>{
                if (typeof col.id === 'string' && col.id.includes(dataset)) {   
                 arr.splice(idx,1)
                }
            })
        }
    }


    // -----------------------------------------------------------------



    assignSettings(settings, info, data)

    // const legends = reactive([]) as Legend[]
    for (const param in settings[dataset]) {
        /** @type {string[]} */
        (data.Timestamp).forEach((_t, tIdx) => {
            const record = Object.keys(data).reduce((acc, key) => {
                acc[key] = data[key][tIdx]
                return acc
            },/** @type {Record<string, unknown>} */({}));

            record["__index__"] = tIdx;

            settings?.[dataset]?.[param]?.featureCreator?.(record, settings[dataset][param]);
            settings[dataset][param].chart?.createDateset(record,settings[dataset][param])
        });

        if (settings?.[dataset]?.[param]?.featureCollection) {
            globeCollections.push(settings[dataset][param].featureCollection)
        }
        legends.push(settings[dataset][param].colormap.getLegend())
    }
    console.log("settings after creating points:", settings);

    return settings
}
