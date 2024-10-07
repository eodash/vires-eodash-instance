<template>
    <span class="d-flex align-center justify-center">
        <DatePicker v-model.range="currentDates" mode="dateTime" :attributes="attributes"
            :disabled-dates="disabledDates" />
    </span>
</template>
<script setup>
import { DatePicker } from 'v-calendar';
import 'v-calendar/style.css';
import { from, to } from '../store/states';
import { customRef, onMounted, reactive } from 'vue';
import { storeToRefs } from 'pinia';
import { store } from '@eodash/eodash';
const { useSTAcStore } = store.stac;


const { stac } = storeToRefs(useSTAcStore());

const randomPalette = [
    "gray",
    "red",
    "yellow",
    "blue",
    "indigo",
    "orange",
    "teal",
    "pink",
    "purple",
    "green",
];
const currentDates = customRef((track, trigger) => ({
    get: () => {
        track()
        return ({
            start: new Date(from.value),
            end: new Date(to.value)
        })
    },
    set: (updatedDate) => {
        const { start, end } = updatedDate
        from.value = start.toISOString();
        to.value = end.toISOString();
        trigger();
    }
}))


const disabledDates = reactive([
    {
        start: null,
        end: Date.now()
    },
    {
        start: Date.now(),
        end: null
    }
]);
/** @type {import("v-calendar/dist/types/src/utils/attribute.js").AttributeConfig[]} */
const attributes = reactive([])

onMounted(() => {
    // end time
    disabledDates[1].start = stac.value?.reduce((max, link) => Math.max(max, Date.parse(/** @type {string} */(link.stopDate))), -Infinity) ?? null
    // start time
    disabledDates[0].end = stac.value?.reduce((min, link) => Math.min(min, Date.parse(/** @type {string} */(link.startDate))), Infinity) ?? null

    attributes.splice(0, attributes.length);
    stac.value?.forEach((link, idx) => {
        attributes.push({
            bar: {
                color: randomPalette[idx % randomPalette.length]
            },
            popover: {
                label: link.title
            },
            dates: [
                [Date.parse(/** @type {string} */(link.startDate)),
                Date.parse(/** @type {string} */(link.stopDate))]
            ],
        })
    })
})

</script>