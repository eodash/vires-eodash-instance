<template>
    <v-row>
        <v-col>
            <v-select v-model="activeDataset" label="select dataset"  :items="datasets"></v-select>
        </v-col>
        <v-col>
            <v-select v-model="activeParam" label="select parameter" :items="datasetParameters"></v-select>
        </v-col>
    </v-row>

    <canvas ref="chartEl"></canvas>
</template>
<script setup >
import { Chart, registerables } from 'chart.js';
import { computed, onMounted, ref, watch } from 'vue';
import zoomPlugin from 'chartjs-plugin-zoom';
import { settings } from '../store/states';
Chart.register(...registerables, zoomPlugin)


const datasets = computed(() => Object.keys(settings))

const activeDataset = ref(datasets.value?.[0])

const datasetParameters = computed(() => Object.keys(settings[activeDataset.value] ?? {}))
const activeParam = ref(datasetParameters.value?.[0]);

/** @type {import("vue").Ref<HTMLCanvasElement|null>} */
const chartEl = ref(null);
/** @type {import("chart.js").Chart | null} */
let chart = null

onMounted(() => {
    if (!chartEl.value) {
        return
    }
    chart = new Chart(chartEl.value, {
        type: 'scatter',
        data: { datasets: [{ data: [] }] },
    })
})

const watcherCallback = () => {
    if (
        chart
        && activeDataset.value
        && activeParam.value
        && settings[activeDataset.value][activeParam.value]
    ) {
        const chartConfig = settings[activeDataset.value][activeParam.value].chart

        if (chartConfig) {
            chart.config.data = chartConfig.configuration.data ?? chart.config.data
            chart.config.options = chartConfig.configuration.options ?? chart.config.options
            chart.update()
        }
    }
}

watch([activeDataset,activeParam], watcherCallback)

</script>