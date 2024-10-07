import * as Cesium from "cesium"
/**
 * Description placeholder
 *
 * @param {import("../types").Position3D} position
 */
export const getPosition3D = (position) => {
    if (position instanceof Cesium.Cartesian3) {
        return Cesium.Cartesian3.clone(position)
    }
    const { x, y, z } = position
    return new Cesium.Cartesian3(x, y, z)
}

/**
 * Description placeholder
 *
 * @param {import("../types").Position2D} position
 */
export const getPosition2D = (position) => {
    if (position instanceof Cesium.Cartesian2) {
        return Cesium.Cartesian2.clone(position)
    }
    const { x, y } = position
    return new Cesium.Cartesian2(x, y)
}

/**
 * Description placeholder
 *
 * @param {import("../types").NearFarScalar} nearFarScalar
 */
export const getNearFarScalar = (nearFarScalar) => {
    if (nearFarScalar instanceof Cesium.NearFarScalar) {
        return Cesium.NearFarScalar.clone(nearFarScalar)
    }
    const { near,nearValue,far,farValue} = nearFarScalar
    return new Cesium.NearFarScalar(near,nearValue,far,farValue)
}
