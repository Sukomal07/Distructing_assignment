function findMaxMin(arr) {
    const max = Math.max(...arr)
    const min = Math.min(...arr)
    return {max, min}
}

const arr = [9, 2, 6, 3, 1, 0]
const ans = findMaxMin(arr)
console.log(ans)