<template>
    <span>
        <div v-if="legends.length" class="legends">
            <ViresLegends />
        </div>
        <Globe :collections3D="globeCollections" />
    </span>
</template>
<script setup>
import Globe from '../components/Globe.vue';
import ViresLegends from '../components/ViresLegends.vue';
import { globeCollections, legends } from '../store/states';

</script>
<style scoped>
.legends {
    height: 20rem;
    width: 30%;
    position: absolute;
    z-index: 1;
    right: 0;
    bottom: 0;
}
</style>