function removeDuplicates(arr){
    return new Set(arr)
}

const arr = [1, 2, 3, 4, 2, 3, 5, 6, 1];
const uniqueNumbers = removeDuplicates(arr);
console.log(uniqueNumbers);
