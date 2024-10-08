import { createEodash } from "@eodash/eodash";

export default createEodash({
    id: "vires",
    //@ts-expect-error served from public folder
    stacEndpoint:new URL("/stac/catalog.json",import.meta.url).href,
    brand: {
        name: "Vires",
        theme: {
            colors: {
                surface: "#fff",
                background: "#fff",
                primary: "#004170",
                secondary: "#004170",
            }
        },
        noLayout: true,
        footerText: "VirEs for Swarm"
    },
    template: {
        gap: 0,
        background: {
            id: 1,
            type: "internal",
            widget: {
                name: "ViresGlobe"
            }
        },
        widgets: [
            {
                id: "datasets",
                title: "Datasets",
                layout: { x: 0, y: 0, w: 3, h: 5 },
                type: "internal",
                widget: {
                    name: "ViresDatasets",
                }
            },
            {
                id: "datepicker",
                title: "Date Picker",
                layout: { x: 0, y: 6, w: 3, h: 6 },
                type: "internal",
                widget: {
                    name: "ViresDatePicker",
                }
            },
            {
                id: "chart",
                title: "Chart",
                layout: { x: 8, y: 0, w: 4, h: 4 },
                type: "internal",
                widget: {
                    name: "ViresChart"
                }
            }
        ],
    }
})