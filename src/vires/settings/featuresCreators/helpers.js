import { DEG2RAD } from "../../../store/constants";
import { Cartesian3 } from "cesium";

/**
 * Description placeholder
 *
 * @export
 * @param {number} latitude
 * @param {number} longitude
 * @param {number} radius
 */
export function convertSpherical2Cartesian(latitude, longitude, radius) {
    // convert geocentric spherical coordinates to Cartesian
    const r_sin_lat = Math.sin(DEG2RAD * latitude) * radius;
    const r_cos_lat = Math.cos(DEG2RAD * latitude) * radius;
    const sin_lon = Math.sin(DEG2RAD * longitude);
    const cos_lon = Math.cos(DEG2RAD * longitude);

    return new Cartesian3(
        r_cos_lat * cos_lon,
        r_cos_lat * sin_lon,
        r_sin_lat
    )
}