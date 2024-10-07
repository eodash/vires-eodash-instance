import featureManager from "../featureManager"
import { handleBillboardsCreation } from "./billboards"
import { handlePointCreation } from "./points"
import { handleVectorCreation } from "./vectors"

/**
 * Description placeholder
 *
 * @param {import("../types").Collections3D[]} [collections]
 */
export const collectionsHandler = (collections) => {
    // console.log("passed collections", collections);
    if (!collections) {
        return
    }

    collections.forEach(collection => {
        switch (collection.type) {
            case "Point": {
                handlePointCreation(collection)
                break
            }
            case "Vector": {
                handleVectorCreation(collection)
                break
            }
            case "Billboard": {
                handleBillboardsCreation(collection)
                break
            }
            default:
                break
        }
    })
    // console.log("showing",featureManager.list());
    featureManager.showAll();
}
