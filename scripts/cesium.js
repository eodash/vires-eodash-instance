import { cp } from "fs/promises"

const cesiumSource = "node_modules/cesium/Build/Cesium";
const cesiumBaseUrl = "cesiumStatic";
const cesiumAssets = ["ThirdParty", "Workers", "Assets", "Widgets"];

(async () => {
    for (const asset of cesiumAssets) {
        const source = `${cesiumSource}/${asset}`
        const dest = `public/${cesiumBaseUrl}/${asset}`
        await cp(source, dest, { recursive: true })
    }
    // console.log("copied cesium files successfully");
    
})()