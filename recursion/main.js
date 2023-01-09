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
