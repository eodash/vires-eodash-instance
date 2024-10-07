import * as Cesium from "cesium"
import { DEG2RAD } from '../../../store/constants';

export class Vector extends Cesium.Cartesian3 {

    /**
     * Creates an instance of Vector.
     *
     * @constructor
     * @param {number} x
     * @param {number} y
     * @param {number} z
     */
    constructor(x, y, z) {
        super(x, y, z)
    }

    norm() { return Math.hypot(this.x, this.y, this.z) }

    normalize() {
        const norm = this.norm();
        return this.multScalar(norm > 0.0 ? 1.0 / norm : 0.0);
    }

    /**
     * Description placeholder
     *
     * @param {number} scalar
     * @returns {Vector}
     */
    multScalar(scalar) {
        return new Vector(this.x * scalar, this.y * scalar, this.z * scalar);
    }

    /**
     * Description placeholder
     *
     * @param {Vector} vector
     * @returns {Vector}
     */
    addVector(vector) {
        return new Vector(this.x + vector.x, this.y + vector.y, this.z + vector.z);
    }

    /**
     * Description placeholder
     *
     * @param {Vector} vector
     * @returns {Vector}
     */
    subVector(vector) {
        return new Vector(this.x - vector.x, this.y - vector.y, this.z - vector.z);
    }

    /**
     * Description placeholder
     *
     * @param {Vector} baseX
     * @param {Vector} baseY
     * @param {Vector} baseZ
     * @returns {Vector}
     */
    project(baseX, baseY, baseZ) {
        const x = baseX.multScalar(this.x);
        const y = baseY.multScalar(this.y);
        const z = baseZ.multScalar(this.z);
        return new Vector(
            x.x + y.x + z.x,
            x.y + y.y + z.y,
            x.z + y.z + z.z
        );
    }

    /**
     * Description placeholder
     *
     * @param {number} latitude
     * @param {number} longitude
     * @returns {Vector}
     */
    projectNEC2GCCart(latitude, longitude) {
        // project vector from a local horizontal NEC frame
        // defined by the latitude and longitude to the global geocentric
        // Cartesian frame
        // latitude and longitude are in degrees
        const sin_lat = Math.sin(DEG2RAD * latitude);
        const cos_lat = Math.cos(DEG2RAD * latitude);
        const sin_lon = Math.sin(DEG2RAD * longitude);
        const cos_lon = Math.cos(DEG2RAD * longitude);

        const xy = - cos_lat * this.z - sin_lat * this.x;
        return new Vector(
            cos_lon * xy - sin_lon * this.y,
            sin_lon * xy + cos_lon * this.y,
            cos_lat * this.x - sin_lat * this.z
        );
    }

    convertSpherical2Cartesian() {
        // convert point from geocentric spherical to
        // geocentric Cartesian coordinates
        // latitude and longitude are in degrees
        const latitude = DEG2RAD * this.x;
        const longitude = DEG2RAD * this.y;
        const radius = this.z;
        const r_sin_lat = Math.sin(latitude) * radius;
        const r_cos_lat = Math.cos(latitude) * radius;
        const sin_lon = Math.sin(longitude);
        const cos_lon = Math.cos(longitude);

        return new Vector(
            r_cos_lat * cos_lon,
            r_cos_lat * sin_lon,
            r_sin_lat
        );

    }
}