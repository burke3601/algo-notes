//given a sorted array and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. there may be more than one pair that matches the average target.

function averagePair(arr, target){
    let left = 0;
    let right = arr.length -1;

    while (left < right){
        let average = (arr[left] + arr[right]) /2
        if (average === target) {
            return true
        } else if (average < target){
            left ++;
        } else {
            right --
        }
    }
    return false
}

console.log(averagePair([1,2,3], 50))