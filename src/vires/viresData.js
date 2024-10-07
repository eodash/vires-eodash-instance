
import { toAbsolute } from "stac-js/src/http.js";
import { store } from "@eodash/eodash";
const { currentUrl } = store.states
import axios from "axios"

/**
 * @typedef {{name:string}[]} ViresParameters
 */


/**
 * Description placeholder
 *
 * @param {import("stac-ts").StacItem} item
 * @param {string} from
 * @param {string} to
 * @param {ViresParameters} parameters
 */
export const fetchHAPiData = async (item, from, to,parameters) => {
    const endpoint = item.assets.data.href + `&start=${from}&stop=${to}&format=json`
    console.log(endpoint);
    
    return await fetch(endpoint).then(async (resp) => {
        const str = await resp.text()
        console.log(str);
        
        const respJson = JSON.parse(str.replaceAll('NaN', '"NaN"'))
        
        /** @type {Record<string,any>[]} */
        const _data = respJson.data
  
       return parameters.reduce((acc, param, idx) => {
          acc[param.name] = (_data)?.map?.(el => el[idx]);
          return acc
        }, /** @type {Record<string,any>} */({}));

      }).catch(console.error)
}
/**
 * Description placeholder
 *
 * @param {string} itemName
 * @param {import("stac-ts").StacCollection | null} collection
 * @returns {Promise<import("stac-ts").StacItem | undefined>}
 */
export const fetchItem = async (itemName, collection) => {
    if (!collection) {
        return
    }
    const link = collection.links.find(link => link.title == itemName)
    if (link) {
        return await axios.get(toAbsolute(link.href, currentUrl.value)).then(resp => resp.data)
    }
}