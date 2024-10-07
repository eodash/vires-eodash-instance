import { COLOR_SCALES } from "./colorscales"

export interface Legend {
    range: string[]
    domain: number[]
    tickValues?: number[]
    titletext: string
    billboards: { image: string, text: string }[]
} 

export type ColorScale = typeof COLOR_SCALES[keyof typeof COLOR_SCALES]
export type ColorScaleName = keyof typeof COLOR_SCALES