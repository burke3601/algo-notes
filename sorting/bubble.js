//naive version
// function bubble(arr){
//     for (let i = arr.length; i > 0; i --){
//         for(let j = 0; j < i - 1; j ++){
//             console.log(arr, arr[j], arr[j+1])
//            if( arr[j] > arr[j +1]) {
//                let temp = arr[j];
//                arr[j] = arr[j+1];
//                arr[j+1] = temp
//            }
//         }
//         console.log("one full pass")
//     }

    
//     return arr;

// }

//console.log(bubble([37,45,29,8, 12, 88, 100, -4]))


//optimized version

function bubble(arr){
    var noSwaps;
    for (let i = arr.length; i > 0; i --){
        noSwaps = true;
        for(let j = 0; j < i - 1; j ++){
            console.log(arr, arr[j], arr[j+1])
           if( arr[j] > arr[j +1]) {
               let temp = arr[j];
               arr[j] = arr[j+1];
               arr[j+1] = temp;
               noSwaps = false;
           }
        }
        if(noSwaps) break
    }
    return arr;

}

console.log(bubble([3,6,2,4,1,5,8,7]))

