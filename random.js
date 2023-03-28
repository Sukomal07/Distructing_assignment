function extractElements(arr) {
    const [first, second, ...rest] = arr
    const last = rest.pop()
    return [first, second, last]
}

const arr = [1, 2, 4, 6, 9]
const ans = extractElements(arr)
console.log(ans)