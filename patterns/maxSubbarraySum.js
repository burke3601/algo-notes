//given an array of integers and a number, find the maximum sum of a subarray with the length of the number passed to the function.

function maxSubarraySum(arr, num){
    if (arr.length < num) 
    return null;

    let total = 0;
    for (let i=0; i < num; i++){
        total += arr[i];
        console.log(total)
    }
    
    let currentTotal = total;
    for (let i = num; i < arr.length; i++){
        currentTotal += arr[i] - arr[i-num];
        total = Math.max(total, currentTotal);
        console.log(total)
    }
    return total;
}

console.log(maxSubarraySum([1,2,3,4,5,6], 3))