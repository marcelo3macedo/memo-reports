class RowManager {
    static getNewOnes(base, target, key) {
        if (!base || !Array.isArray(base) || base.length == 0) return

        return base.filter(i => this.findById(target, key, i[key]) === 0)
    }

    static findById(objects, key, value) {
        return objects.filter(x => x[key] === value).length
    }

    static formatInsert(objects, keys) {
        const result = []

        objects.map(o => {
            let item = []

            keys.map(k => {
                item.push(o[k])
            })

            result.push(item)
        })

        return result
    }
}

export default RowManager