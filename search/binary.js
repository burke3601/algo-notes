

function binary(array, value){
    let  left= 0;
    let right = array.length -1;
    let middle = Math.floor((left + right) / 2);

    while (array[middle] !== value && left <= right) {
        
        if(value < array[middle]){
            right = middle -1;
        }else {
            left = middle +1;
        }
        middle = Math.floor((left + right) / 2);
    }
    console.log(left, right, middle)
    if (array[middle] == value){
        return middle
    }
    return -1;


}

console.log(binary([1,2,3,4,5,6,7,8,9,12,14,17,22,27,29,36,56,66,77], 44))
console.log(binary([1,2,3,4,5,6,7,8,9],3 ))