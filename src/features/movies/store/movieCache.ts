const movieCache = new Map<string, any>()

export const fetchResource = (
    key: string,
    params: any,
    dispatchFunction: () => Promise<any>
) => {
    const cacheKey = `${key}-${JSON.stringify(params)}`

    if (movieCache.has(cacheKey)) {
        return movieCache.get(cacheKey)
    }

    let entry: any = {
        status: "pending",
        data: null,
        promise: null
    }

    const promise = dispatchFunction()
        .then((data) => {
            entry.status = "success"
            entry.data = data
            return data
        })
        .catch((err) => {
            entry.status = "error"
            entry.data = err
            throw err
        })

    entry.promise = promise
    movieCache.set(cacheKey, entry)
    return entry
}