import { Collections3D } from "../globe/types"
import { createColorMap } from "./colorMap"

export interface VirEsSettings {
    [dataset: string]: {
        [param: string]: {
            timestamp?: [string, string]
            info?: {
                name: string
                range: number[]
                uom?: string
                colorscale?: string
                breakInto?: string[]
                size?: number[]
                description?: string;
                units?: string;
                type?: string
            } & Record<string, any>
            // data set ID
            dataset: string,
            // wether to have outlines on the rendered shape
            outlines?: boolean,
            // color of the outlines
            outline_color?: boolean,
            // opacity
            alpha?: number,
            // parameter index (used for the height offset)
            index: number,
            // color map
            colormap: ReturnType<typeof createColorMap>
            // parameter components (broken to)
            components?: string[]
            // wether to be rendered as a vector
            isVector?: boolean,
            // wether to be rendered as a point
            isScalar?: boolean,
            featureCollection?: Collections3D;
            featureCreator?: (record: Record<string, any>, settings: VirEsSettings[string][string]) => void
            // size of the point in case of scalar
            pixelSize?: number
            fixedAltitude?: number
            norms?: number[];
            maxNorm?: number;
            pushToNorms?: (norm: number) => void;
            chart?: {
                createDateset: (record: any, settings: VirEsSettings[string][string]) => void;
                configuration: ChartConfiguration<"scatter">;
            }
        }
    }
}
