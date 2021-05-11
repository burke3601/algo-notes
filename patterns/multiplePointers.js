//write a cunstion called sumZero which accepts a sorted array of integers. the function should find the first pair where the sum is 0. return an array tha includes both values that sum to zero or undefined if a pair does not exist
//naive solution
// function sumZero(arr){
    
//     for( let i =0; i<arr.length; i ++ ){
//         for (let j = i+1; i<arr.length; j ++){
//             if (arr[i] + arr[j] === 0){
//                 return [arr[i],arr[j]]
//             }
            
//         }
//     }
// }

// console.log(sumZero([-1,0,1]))

//refactor

function sumZero(arr){
    let left = 0;
    let right = arr.length -1;

    while(left < right){
        let sum = arr[left] + arr[right];
        if( sum === 0){
            
            return [arr[left], arr[right]]
        }
        else if( sum > 0){
            left ++;
        }
        else{
            right --;
        }
        return undefined;
    }
}


console.log(sumZero([-3,-2,0,1,3]))
console.log(sumZero([-4,-2,0,1,3]))
console.log(sumZero([-3]))










// function sumZero (arr) {
//     let left = 0;
//     let right = arr.length -1;

//     while (left < right){
//         let sum = arr[left] + arr[right];
//         if (sum === 0){
//             return [arr[left], arr[right]]
//         } else if (sum > 0){
//             right--;
//         }else {
//             left++
//         }
//     }
// }