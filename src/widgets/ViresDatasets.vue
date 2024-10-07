<template>
    <span class="fill-height fill-width">

        <v-card-title>
            Datasets:
        </v-card-title>
        <v-treeview :items="items" color="black" item-value="title" item-title="title"
            @update:activated="onDataSelect" :load-children="fetchCollections" item-props="props"
            class="fill-height fill-width overflow-auto overflow-x-hidden" activatable open-on-click>
            <template #prepend="{ item }">
                <!-- @vue-expect-error -->
                <v-icon v-if="ICONS[item.type]" :icon="[ICONS[item.type]]" />
            </template>
        </v-treeview>
    </span>
</template>
<script setup>
import { VTreeview } from 'vuetify/labs/VTreeview'
import { store } from '@eodash/eodash';
import { storeToRefs } from 'pinia';
import { reactive } from 'vue';
import { ICONS } from '../store/constants';
import { fetchHAPiData, fetchItem } from '../vires/viresData';
import { from, to } from '../store/states';
import { createDataFeatures } from '../vires';
const { loadSelectedSTAC } = store.stac.useSTAcStore()
const { stac, selectedStac } = storeToRefs(store.stac.useSTAcStore());

/**
 * @typedef {{
 * id:string;
 * title:string;
 * type:string,
 * children?:ItemType[]
 * }} ItemType
 */

/** @type {ItemType[]} */
const items = reactive([]);
/** @type {string[]} */
const missions = []
stac.value?.reduce((acc, link) => {
    //@ts-expect-error
    if (!acc.includes(link.mission)) {
        //@ts-expect-error
        acc.push(link.mission)
    }
    return acc
}, missions);

missions.reduce((acc, mission) => {
    acc.push({
        id: mission,
        title: mission,
        type: "mission",
        children: stac.value?.filter(link => link.mission === mission).reduce((acc, link) => {
            acc.push({
                id: link.title ?? '',
                title: link.title ?? '',
                type: "dataType",
                children: []
            });
            return acc
        },/** @type {ItemType[]} */([]))
    })
    return acc
}, items);

console.log(items);

/**
 * 
 * @param {unknown} item 
 */
const fetchCollections = async (item) => {
    //@ts-expect-error
    const link = stac.value?.find(link => link.title == item.title)
    await loadSelectedSTAC(link?.href).then(() => {
        //@ts-expect-error
        item.children = selectedStac.value?.links.map(link => ({ id: link.id, title: link.title ?? "", type: "dataset" }))
    })
}
let counter = 0
/** @type {NodeJS.Timeout} */
let timer;
/** @param {unknown} arr */
const onDataSelect = async (arr) => {
    clearTimeout(timer);
    timer = setTimeout(async () => {
        console.log("times exec:", ++counter);

        const [dataset] =/** @type {string[]} */(arr)
        //@ts-expect-error
        const item = await fetchItem(dataset, selectedStac.value)
        console.log("fetched item:", item);
        const link = selectedStac.value?.links.find(link => link.title === dataset);
        if (!item || !link) {
            return
        }
        //@ts-expect-error
        const data = await fetchHAPiData(item, from.value, to.value, link["vires:parameters"])
        console.log("data:", data);
        if (!data) {
            return
        }
        createDataFeatures(dataset, data, link)
    })
}

</script>
