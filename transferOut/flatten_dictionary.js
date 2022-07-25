function flattenDictionary(dict) {
    const flat = {}
    const strBuilder = []
    traverse(dict)
    function traverse(obj) {
        for (let key in obj) {
            if (obj[strBuilder[strBuilder.length - 1]]) strBuilder.pop()
            if (typeof obj[key] === "string") {
                if (key.length) strBuilder.push(key)
                flat[strBuilder.join('.')] = obj[key]
                strBuilder.pop()
            }
            if (typeof obj[key] === "object") {
                if (key.length) strBuilder.push(key)
                traverse(obj[key])
            }
        }
    }
    return flat
}
