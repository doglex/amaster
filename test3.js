function getSuffix(filename) {
    let last = filename.substring(filename.length - 6)
    console.log(last)
    if (!last.includes(".")) return "nan";
    let lastParts = last.split(".")
    console.log(lastParts)
    return lastParts[lastParts.length -1]
}

console.log(getSuffix("7777777777777.jpg"))