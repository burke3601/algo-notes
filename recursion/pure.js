function collectOddValues(arr){
    let newArr = [];

    if(arr.length === 0) {
        return newArr
    }

    if(arr[0] % 2 !== 0){
        newArr.push(arr[0])
    }

    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}

console.log(collectOddValues([1,2,3,4,5,6,7]))

//slice, spread operator, and concat makes copies of the arrays
//to make copies use Object.assign or the spread operator