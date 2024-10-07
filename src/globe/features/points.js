import * as Cesium from "cesium"
import { DEFAULT_POINT_PIXEL_SIZE, NEAR_FAR_SCALAR } from "../../store/constants"
import featureManager from "../featureManager"
import { getPosition3D } from "./utils"

/**
 * Description placeholder
 *
 * @param {import("../types").Point3DCollection} pointCollection
 */
export const handlePointCreation = (pointCollection) => {
    const { createPoint, featureCollection } = getPointCreator()
    pointCollection.points.forEach(point => {
        createPoint(point)
    })
    //@ts-expect-error ???
    featureManager.add(pointCollection.id, featureCollection)
}

function getPointCreator() {
    const featureCollection = new Cesium.PointPrimitiveCollection();

    /** @param {import("../types").Point3D} point */
    const createPoint = (point) => {
        const position = getPosition3D(point.position)
       featureCollection.add({
            id: "",
            position,
            show: true,
            color: Cesium.Color.fromCssColorString(point.color),
            pixelSize: point.pixelSize ?? DEFAULT_POINT_PIXEL_SIZE,
            outlineWidth: point.outlineWidth ?? 0,
            scaleByDistance: point.scaleByDistance ?? NEAR_FAR_SCALAR,
        })

    }
    return {
        featureCollection,
        createPoint
    }
}

