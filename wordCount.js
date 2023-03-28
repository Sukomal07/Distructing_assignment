function countWords(str){
    const words = str.split(' ')
    const map = new Map()
    for(const word of words){
        const count = map.get(word) || 0
        map.set(word, count + 1)
    }
    return map;
}

const str = 'this is a sample string with several words this a string'
const wordCount = countWords(str)
console.log(wordCount)

