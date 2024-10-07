import * as Cesium from "cesium"
import { getNearFarScalar, getPosition2D, getPosition3D } from "./utils"
import { NEAR_FAR_SCALAR } from "../../store/constants"
import featureManager from "../featureManager"
import "../featureManager"

/**
 * Description placeholder
 *
 * @param {import("../types").BillboardCollection} billboardCollection
 */
export const handleBillboardsCreation = (billboardCollection) => {
    const {createBillboard,featureCollection}= getBillboardCreator()
    billboardCollection.billboards.forEach(billboard=>{
        createBillboard(billboard)
    })

    featureManager.add(billboardCollection.id,featureCollection)
}

function getBillboardCreator() {
    const featureCollection = new Cesium.BillboardCollection()

    /**
     * Description placeholder
     *
     * @param {import("../types").Billboard} billboard
     */
    const createBillboard = (billboard) => {
        let {
            image, position, height,
            id, eyeOffset, pixelOffset,
            scale, scaleByDistance, width
        } = billboard

        featureCollection.add({
            id,
            position: getPosition3D(position),
            image,
            height,
            width,
            eyeOffset: eyeOffset ? getPosition3D(eyeOffset) : new Cesium.Cartesian3(0, 0, -50000),
            pixelOffset: pixelOffset ? getPosition2D(pixelOffset) : new Cesium.Cartesian2(0, 0),
            scale: scale ?? 0.1,
            scaleByDistance: scaleByDistance ? getNearFarScalar(scaleByDistance) : NEAR_FAR_SCALAR
        })
    }

    return {
        featureCollection,
        createBillboard
    }
}