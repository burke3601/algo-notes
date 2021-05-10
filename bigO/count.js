

function charCount(str) {
    let result = {};

    for (let i = 0; i < str.length; i ++){
        let char = str[i];
        if (result[char] > 0) {
            result[char] ++
        } else {
            result[char] = 1
        }
    }

    return result;
} 


console.log(charCount("aaaa ygygjkfhkg"))


// // write a function which takes in a string and return counts of each character in the string

// //ignore casing? 
// //do numbers count? spaces?
// //edge cases numbers, object, etc

// // break it down, communicate what you are going to do, eplicitly wirte out the steps you need to take

// function charCount(str) {
//     //make object to return at end
//     let result = {}
//     // loop over stringm for each character
//     for (let i = 0; i < str.length; i++){
//         let char = str[i].toLowerCase();
//         if(result[char] > 0){
//             result[char] ++;
//         } else {
//             result[char] = 1
//         };
//     }
//         // if char is a number/letter is a  key, add one to count
//         //if char is not number/letter is a in object, add it and set value to 0
//         // if character is something else (space, period, etc. ) don't do anything
//     // return object at end
//     return result

// }

// console.log(charCount("hello"))
// console.log(charCount("hello Hi There!!!"))

// function charCountAlt(str) {
//     const obj = {};
//     for (let char of str) {
//         char = char.toLowerCase();
//         if (/[a-z0-9]/.test(char)){
//             if (obj[char] > 0) {
//                 obj[char] ++;
//             } else obj[char] = 1
//         }
//     }

//     return obj;
// }

// console.log(charCountAlt("asdkljdsfjkldfjk 1232kjdf;j4r"));

//could also make a helper function