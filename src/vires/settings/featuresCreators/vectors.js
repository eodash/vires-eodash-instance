import { HEIGHT_OFFSET, MAX_VECTOR_LENGTH } from "../../../store/constants";
import { Vector } from "./VectorClass";

/**
 * Description placeholder
 *
 * @param {string} parameter
 * @param {string} dataset
 */
export const getVectorCreator = (dataset,parameter,) => {
    /** @type {import("src/globe/types").Vector3DCollection} */
    const featureCollection = {
        id:dataset+"_"+ parameter,
        type: "Vector",
        vectors: []
    }

    let vectorCreator

    switch (parameter) {

        case 'Absolute_STEC':
        case 'Absolute_VTEC':
        case 'Elevation_Angle':
        case 'Relative_STEC':
        case 'Relative_STEC_RMS':
            /**
             * Description placeholder
             *
             * @param {Record < string, any >} record
             * @param {import("../../types").VirEsSettings[string][string]} paramSettings
             */
            vectorCreator = (record, paramSettings) => {
                // _createVectorTEC(record, paramSettings);
            }

        default:
            /**
             * Description placeholder
             *
             * @param {Record < string, any >} record
             * @param {import("../../types").VirEsSettings[string][string]} paramSettings
             */
            vectorCreator = (record, paramSettings) => {
                createNECVector_(record, paramSettings, featureCollection);
            };
    }

    return {
        featureCollection,
        vectorCreator
    }

}


/**
 * Description placeholder
 *
 * @param {*} record
 * @param {import("../../types").VirEsSettings[string][string]} paramSettings
 * @param {import("src/globe/types").Vector3DCollection} collection
 */
function createNECVector_(record, paramSettings, collection) {

    // for coloring
    const value = paramSettings.norms?.[record.__index__];
    const maxNorm = paramSettings.maxNorm
    //@ts-expect-error
    if (isNaN(value) || isNaN(maxNorm)) { return; }

    const color  = paramSettings.colormap.getColor( /** @type {number} */(value))
    // vector base point in the geocentric Cartesian frame
    const position = new Vector(
        record.Latitude,
        record.Longitude,
        record.Radius
        //  + ((paramSettings?.['index'] ?? 0) * HEIGHT_OFFSET)
    ).convertSpherical2Cartesian();

    //@ts-expect-error
    const X = record?.[paramSettings.info?.name]?.[0]
    //@ts-expect-error
    const Y = record?.[paramSettings.info?.name]?.[1]
    //@ts-expect-error
    const Z = record?.[paramSettings.info?.name]?.[2]

    const vector = new Vector(X, Y, Z)
        .multScalar(MAX_VECTOR_LENGTH / /** @type {number} */(maxNorm))
        .projectNEC2GCCart(record.Latitude, record.Longitude)
        .addVector(position);
    collection.vectors.push({
        positions:[position,vector],
        color,
    })
};