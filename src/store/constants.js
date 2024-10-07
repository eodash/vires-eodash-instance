import * as Cesium from "cesium"
import { mdiNoteMultiple, mdiSpaceStation } from "@mdi/js"

// // const url = 'https://staging-s2maps.tiles.eox.at/wms';
// const BASE_LAYERS_URL = 'https://a.tiles.maps.eox.at/wms' as const
// export const BASE_LAYERS = [
//     {
//         url: BASE_LAYERS_URL,
//         name: "Terrain light",
//         layer: "terrain-light"
//     },
//     {
//         url: BASE_LAYERS_URL,
//         name: "Terrain",
//         layer: "terrain"
//     },
//     {
//         url: BASE_LAYERS_URL,
//         name: "S2Cloudless",
//         layer: "s2cloudless-2023"
//     },
// ] as const

// export const SATALITES = {
//     "A": "Alpha",
//     "B": "Bravo",
//     "C": "Charlie"
// } as const

// export const SWARM_MOD = "SW_OPER_MODx_SC_1B"


// export const MAG_DATASETS = [
//     "SW_OPER_MAGA_LR_1B", "SW_OPER_MAGB_LR_1B", "SW_OPER_MAGC_LR_1B", "CS_OPER_MAG", "GRACE_A_MAG",
//     "GO_MAG_ACAL_CORR", "GF1_OPER_FGM_ACAL_CORR", "GRACE_B_MAG",
//     "GF2_OPER_FGM_ACAL_CORR", "CH_ME_MAG_LR_3"] as const


// export const DATA_SETS_BY_CATEGORY = [
//     {
//         title: "Magnatic Data:",
//         datasets: MAG_DATASETS
//     },
//     {
//         title: "Plasma Data",
//         datasets: ["SW_OPER_EFIA_LP_1B", "SW_OPER_EFIB_LP_1B", "SW_OPER_EFIC_LP_1B"]
//     },
//     {
//         title: "Ionospheric total electron content:",
//         datasets: ["SW_OPER_TECATMS_2F", "SW_OPER_TECBTMS_2F", "SW_OPER_TECCTMS_2F"]
//     }
// ]

export const DEG2RAD = Math.PI / 180.0;

export const DEFAULT_POINT_PIXEL_SIZE = 6;

export const NEAR_FAR_SCALAR = new Cesium.NearFarScalar(1.0e2, 4, 14.0e6, 0.8);

export const HEIGHT_OFFSET = 170000; //m

export const EARTH_RADIUS = 6371000; // m
export const SWARM_ALTITUDE = 450000; // m
export const IONOSPHERIC_ALTITUDE = 110000; // m

export const DEFAULT_NOMINAL_RADIUS = EARTH_RADIUS + SWARM_ALTITUDE;

export const NOMINAL_RADIUS = {
    'J_QD': EARTH_RADIUS + IONOSPHERIC_ALTITUDE,
    'J_NE': EARTH_RADIUS + IONOSPHERIC_ALTITUDE,
    'J_T_NE': EARTH_RADIUS + IONOSPHERIC_ALTITUDE,
    'J_DF_NE': EARTH_RADIUS + IONOSPHERIC_ALTITUDE,
    'J_CF_NE': EARTH_RADIUS + IONOSPHERIC_ALTITUDE,
    'J_DF_SemiQD': EARTH_RADIUS + IONOSPHERIC_ALTITUDE,
    'J_CF_SemiQD': EARTH_RADIUS + IONOSPHERIC_ALTITUDE,
    'J_R': EARTH_RADIUS + IONOSPHERIC_ALTITUDE,
} 

// export const DEFAULT_NOMINAL_PRODUCT_LEVEL = 3;
// export const NOMINAL_PRODUCT_LEVEL = {
//     "SW_OPER_AEJALPS_2F": 1,
//     "SW_OPER_AEJBLPS_2F": 1,
//     "SW_OPER_AEJCLPS_2F": 1,
//     "SW_OPER_AEJULPS_2F": 1,
//     "SW_OPER_AEJALPL_2F": 1,
//     "SW_OPER_AEJBLPL_2F": 1,
//     "SW_OPER_AEJCLPL_2F": 1,
//     "SW_OPER_AEJULPL_2F": 1,
// } as const
// export const FIXED_HEIGHT_PRODUCT = [
//     "SW_OPER_AEJALPS_2F", "SW_OPER_AEJBLPS_2F", "SW_OPER_AEJCLPS_2F", "SW_OPER_AEJULPS_2F",
//     //"SW_OPER_MAGA_LR_1B+SW_FAST_MAGA_LR_1B", "SW_OPER_MAGB_LR_1B+SW_FAST_MAGB_LR_1B", "SW_OPER_MAGC_LR_1B+SW_FAST_MAGC_LR_1B", "SW_OPER_MAGU_LR_1B",
// ] as const


// export const TEC_VECTOR_SAMPLING = 40000; // ms
// export const TEC_VECTOR_LENGTH = 500000; // m - length of the normalized TEC vectors
export const MAX_VECTOR_LENGTH = 600000; // m - length of the longest regular vector
// export const JNE_VECTOR_SAMPLING = 5000; // ms
// export const NEC_VECTOR_SAMPLING = 5000; // ms
// export const TII_VECTOR_SAMPLING = 500; // ms

// export const BUBLE_PROBABILITY_THRESHOLD = 0.1;

// export const PT_AEJ_POINT_TYPE_MASK = 0x2;
// export const PT_AEJ_BOUNDARY = 0x2;
// export const PT_AEJ_PEAK = 0x0;
// export const BF_AOB_POINT_TYPE_MASK = 0x3;
// export const BF_AOB_EW_BOUNDARY = 0x1;
// export const BF_AOB_PW_BOUNDARY = 0x2;

export const SCALAR_PARAM = /** @type {const} */ ([
    // "F_Model", "F_res_Model",
    "F", 
    // "Flags_F", "Flags_B", 
    "Ne", "Te", "Vs", "U_orbit",
    "Bubble_Index", "Bubble_Probability", "Flags_Bubble", "IRC", "FAC", "EEF",
    "Background_Ne", "Foreground_Ne", "PCP_flag", "Grad_Ne_at_100km", "Grad_Ne_at_50km",
    "Grad_Ne_at_20km", "Grad_Ne_at_PCP_edge", "ROD", "RODI10s", "RODI20s", "delta_Ne10s",
    "delta_Ne20s", "delta_Ne40s", "Num_GPS_satellites", "mVTEC", "mROT", "mROTI10s",
    "mROTI20s", "IBI_flag", "Ionosphere_region_flag", "IPIR_index", "Ne_quality_flag",
    "TEC_STD",
    "J_QD", "J_R", "J_CF_SemiQD", "J_DF_SemiQD", "Boundary_Flag", "Pair_Indicator",
    "Tn_msis", "Ti_meas_drift", "Ti_model_drift", "Flag_ti_meas", "Flag_ti_model",
    "M_i_eff", "M_i_eff_err", "M_i_eff_Flags", "M_i_eff_tbt_model",
    "V_i", "V_i_err", "V_i_Flags", "V_i_raw", "N_i", "N_i_err", "N_i_Flags",
    "T_e", "Phi_sc",
    "Vixh", "Vixv",
]);

export const SCALAR_PARAM_LOGARITMIC = /** @type {const} */ ([
    "Ne", "Te", "U_orbit", "Vs"
]);

export const VECTOR_PARAM = /** @type {const} */([
    // "B_NEC",
     "B_NEC_resAC", "B_NEC_res_Model",
    // "GPS_Position", "LEO_Position",
    "Relative_STEC_RMS", "Relative_STEC", "Absolute_STEC", "Absolute_VTEC", "Elevation_Angle",
    // "dB_other", 
    // "dB_AOCS", "dB_Sun",
    "J_NE", "J_T_NE", "J_CF_NE", "J_DF_NE",
    "V_sat_nec",
    "VsatNEC",
    "Viy", "Viz", "Vixy", "Vixz", "Viyz", "Eh", "Ev",
]);


export const ICONS = {
    mission: mdiSpaceStation,
    dataType: mdiNoteMultiple
} 