const str = "'loremipsumdolor','o'"

console.log(str.slice(7).match(/o/g));

//-------------------------------------- elem

//let arr = [1, 2, 3, 4, 5]
//console.log(arr[4]);

//--------------------0---------------- masiv
let arr = [4,5,6]
arr.unshift(1,2,3)
arr.push(7,8,9,10)
console.log(arr);

//----------------------------recursion

let i = 0;
const printArrayValues = () => {
    i++;
    if (i > 3) {
        return 'array'
    }
    console.log(i, 'array');
    printArrayValues([1, 2, 3])
}
printArrayValues([1, 2, 3])
