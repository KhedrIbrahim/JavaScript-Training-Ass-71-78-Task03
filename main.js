let myArray = ["E", "l", "z", ["e", "r"], "o"];

let newArr = myArray.reduce( (acc, cele) => acc.concat(cele), [])
.reduce(function (acc, cele){
    return `${acc}${cele}`
})
console.log(newArr)
// Elzero