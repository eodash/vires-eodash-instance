import * as Cesium from "cesium"
import { getPosition3D } from "./utils";
import featureManager from "../featureManager";

/**
 * Description placeholder
 *
 * @param {import("../types").Vector3DCollection} vectorCollection
 */
export const handleVectorCreation = (vectorCollection) => {
    const { createVector, featureCollection } = getVectorCreator()
    vectorCollection.vectors.forEach(vector => {
        createVector(vector)
    })
    featureManager.add(vectorCollection.id, featureCollection)
}

function getVectorCreator() {
    const featureCollection = new Cesium.Primitive({
        geometryInstances: [],
        appearance: new Cesium.PolylineColorAppearance({
            translucent: true
        }),
        releaseGeometryInstances: false,
    });

    /** @param {import("../types").Vector3D} vector */
    const createVector = (vector) => {
        const positions = vector.positions.map(getPosition3D);
        const geometry = new Cesium.PolylineGeometry({
            // to do: add vector
            positions,
            arcType: 1,
            width: 1.7,
            vertexFormat: Cesium.PolylineColorAppearance.VERTEX_FORMAT
        })
        const color = Cesium.ColorGeometryInstanceAttribute.fromColor(
            Cesium.Color.fromCssColorString(vector.color)
        );

        /** @type {import("cesium").GeometryInstance[]} */
        (featureCollection.geometryInstances).push(
            new Cesium.GeometryInstance({
                geometry,
                attributes: {
                    color
                },
                ...(vector.id && {
                    id: vector.id
                })
            })
        )
    }

    return {
        featureCollection,
        createVector
    }
}