export const createVectorNorms = () => {
    let maxNorm = 0;
    /**
     * @type {number[]}
     */
    const norms = []
    /**
     * Description placeholder
     *
     * @param {number} norm
     */
    function push(norm) {
        norms.push(norm);
        if (isNaN(norm)) {
            return
        }
        maxNorm = Math.max(maxNorm, norm)
    }


    return {
        norms,
        get maxNorm() {
            return maxNorm
        },
        set maxNorm(val) {
            maxNorm = val
        },
        push
    };
}

// norms cache preventing repeated calculation
export const createNormsCache = () => {
    /**
     * @type { Record<string, any>}
     */
    const cache_ = {}

    /**
     * Description placeholder
     *
     * @param {string} parameter
     * @param {string} dataset
     * @param {number[][]} data -  array of components (broken to) data arrays
     */
    const getNorms = (dataset,parameter, data) => {
        /** @type {ReturnType<typeof createVectorNorms>} */
        let norms = cache_[dataset]?.[parameter]
        if (!norms) {
            norms = calculateNorms_(data);
            if (!cache_[dataset]) {
                cache_[dataset] = {}
            }
            cache_[dataset][parameter] = norms;
        }
        return norms;
    }

    /**
     * Description placeholder
     *
     * @param {number[][]} data
     */
    const calculateNorms_ = (data) => {
        switch (data?.length) {
            case 3:
                return _calculateV3Norms(data[0], data[1], data[2]);
            case 2:
                return _calculateV2Norms(data[0], data[1]);
            case 1:
                return _calculateSNorms(data[0]);
            default:
                throw "Unsupported vector length " + data.length + "!";
        }
    }


    /**
     * Description placeholder
     *
     * @param {number[]} x
     */
    const _calculateSNorms = (x) => {
        const norm1 = Math.abs;
        const norms = createVectorNorms()
        for (let i = 0, size = x.length; i < size; i++) {
            norms.push(Number(norm1(x[i]).toFixed(0)));
        }
        return norms;
    }

    /**
     * Description placeholder
     *
     * @param {number[]} x
     * @param {number[]} y
     */
    const _calculateV2Norms = (x, y) => {
        const vnorm2 = Math.hypot;
        const norms = createVectorNorms()

        for (let i = 0, size = x.length; i < size; i++) {
            norms.push(Number(vnorm2(x[i], y[i]).toFixed(0)));
        }
        return norms;
    }

    /**
     * Description placeholder
     *
     * @param {number[]} x
     * @param {number[]} y
     * @param {number[]} z
     */
    const _calculateV3Norms = (x, y, z) => {
        const vnorm3 = Math.hypot;
        const norms = createVectorNorms()
        if (x?.length) {
            for (let i = 0, size = x?.length; i < size; i++) {
                norms.push(Number(vnorm3(x[i], y[i], z[i]).toFixed(0)));
            }
        }
        return norms;
    }

    return { getNorms }
};

