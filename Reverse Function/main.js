function reverseWord(word){
    const arr = word.split(''),
    reversedArray = []
    for (let x of arr){
        reversedArray.unshift(x)
    }
    return reversedArray.join('')

}

console.log(reverseWord('WELCOME'))