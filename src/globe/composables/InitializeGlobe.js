import { onMounted } from "vue"
import * as Cesium from "cesium";
import { globeViewer } from "../../store/states";


export const useInitializeGlobe = () => {
    Cesium.Ion.defaultAccessToken = import.meta.env.VITE_CESIUM_TOKEN;
    onMounted(() => {
        globeViewer.value = new Cesium.Viewer("cesiumContainer", {
            skyBox: false,
            animation: false,
            baseLayerPicker: false,
            homeButton: false,
            fullscreenButton: false,
            timeline: false,
            contextOptions: {
                webgl: {
                    alpha: true,
                }
            },
        });
        globeViewer.value.scene.backgroundColor = Cesium.Color.clone(Cesium.Color.WHITE).withAlpha(0.0);
        globeViewer.value.scene.camera.constrainedAxis = undefined
    })
}