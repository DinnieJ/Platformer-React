export const importAllFiles = (r) => {
    let arr = r.keys().map(r)

    return arr.map(item => item.default)
};
