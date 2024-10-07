<template>
    <span class="fill-height">
        <div class="fill-height" id="cesiumContainer"></div>
    </span>
</template>
<script setup>
import "cesium/Build/Cesium/Widgets/widgets.css";
import { useInitializeGlobe } from "../globe/composables/InitializeGlobe";
import { watch } from "vue";
import { collectionsHandler } from "../globe/features";

const props = defineProps({
    collections3D: {
        /** @type {import("vue").PropType<import("../globe/types").Collections3D[]>} */
        type: Array,
        required: true
    }
});

watch(props.collections3D, (updatedCollections) => {
    collectionsHandler(updatedCollections)
});

useInitializeGlobe()
</script>