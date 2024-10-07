import { reactive, ref, shallowRef } from "vue";

/** @type {import("vue").ShallowRef<import("cesium").Viewer|null>} */
export const globeViewer = shallowRef(null)

export const allowedFrom = ref(new Date(0).toISOString())
export const from = ref("2014-01-11T00:00:00.000Z")
export const allowedTo = ref(new Date().toISOString())
export const to = ref("2014-01-11T02:00:00.000Z")

/** @type {import("../vires/types").VirEsSettings} */
export const settings = reactive({})


/**
 *
 * @type {import("../globe/types").Collections3D[]}
 */
export const globeCollections = reactive([])
/** @type {import("../vires/colorMap/types").Legend[]} */
export const legends = reactive([])


//@ts-expect-error
window.viresStore = {
    legends,
    globeCollections,
    allowedFrom,
    allowedTo,
    from,
    to,
    settings
}