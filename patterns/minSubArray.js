
//write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.
//this function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. if there isn't one, return 0 instead

function minSubArrayLen(nums, sum) {
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;

    while (start < nums.length){
        if(total < sum && end < nums.length){
            total+= nums[end];
            end++
        }

        else if(total >= sum){
            minLen = Math.min(minLen, end-start);
            total -= nums[start];
            start++
        }

        else{
            break
        }
    }
    return minLen === Infinity ? 0 : minLen;
}

console.log(minSubArrayLen[2,3,1,2,4,3], 7)
console.log(minSubArrayLen[2,1,6,5,4], 9)

//still need to work on this one