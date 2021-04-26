
// function selection(arr){

//     for(let i = 0; i < arr.length; i ++){
//         let lowest = i;
//         for (let j = i + 1; j < arr.length; j ++){
//             console.log(i,j)
//             if(arr[j] < arr[lowest]){
//                 lowest = j;
//             }
//         }
//         if (i !== lowest) {
//         console.log(arr)
//         console.log("swapping to: ")
//         let temp = arr[i]
//         arr[i] = arr[lowest]
//         arr[lowest] = temp
//         console.log(arr)
//         console.log("###############################");
//         }
//         }

//     return arr
// }

// console.log(selection([0,3,5,2,4,1]))

//es2015 syntax

function selection(arr) {
    const swap = (arr, idx1, idx2) => 
        ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

    for( let i = 0; i < arr.length; i ++) {
        let lowest = i;
        for (let j = i +1; j < arr.length; j ++) {
            if(arr[lowest] > arr[j]) {
                lowest = j
            }
        }
        if (i !== lowest) swap(arr,i,lowest);
    }

    return arr
}

console.log(selection([0,3,5,2,4,1]))