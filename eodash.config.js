import { defineConfig } from "@eodash/eodash/config";
import { config } from "dotenv"
import path from "path";
// config .env
config();

export default defineConfig({
    widgets: "./src/widgets/",
    publicDir: "./public",
    vite: {
        define:{
            CESIUM_BASE_URL: JSON.stringify("cesiumStatic"),
        },
        envDir:path.resolve("."),
        optimizeDeps: {
            include: [
                "cesium",
                "color-legend-element",
                "chart.js",
                "hammerjs"
            ]
        },
        assetsInclude: ['@/types']
    }
})