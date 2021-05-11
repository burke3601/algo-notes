// function charCount(str){
//     let result = {};
     
//     for(let i = 0; i < str.length; i ++){
//         let char = str[i];
//         if(result[char] > 0){
//             result[char] ++;

//         }else{
//             result[char] =1
//         }
//     }
//     return result;


// }

// // charCount(hello) {h:1, e:1, l:2, o:1}
// console.log(charCount("hello"));

//write a function calle same, which accepts two arrays. the funcion should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same

// [1,2,3], [1,4,9] true
//[1,2,3], [1,9] false
//[1,2,3], [4,4,1] true
function same(arr1, arr2){

    if(arr1.length !== arr2.length){
        return false
    }

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) +1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) +1
    }
    console.log(frequencyCounter1)


    //compare squared frequencycounter1 to frequencyCounter2

    for(let key in frequencyCounter1){
        if(!(key **2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
        
    }
    return true;



}

console.log(same([2,4,3,4], [4,9,16, 16]))
console.log(same([2,4,3,4], [4,9,16, 17]))
