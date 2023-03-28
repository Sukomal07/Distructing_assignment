function swapValues(x, y){
    [x, y] = [y , x]
    return [x, y]
}

let a = 5
let b = 10
console.log(swapValues(a, b))