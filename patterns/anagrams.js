//given two strings write a function to determine if the second string is an anagram of the first

function anagrams(str1, str2){

    if(str1.length !== str2.length){
        return false;
    }
    const lookup = {};

    for (let i = 0; i < str1.length; i++){
        let letter = str1[i];

        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    console.log(lookup)

    for (let i = 0; i < str2.length; i++){
        let letter = str2[i];

        if(!lookup[letter]){
            return false;
        } else {
            lookup[letter] -= 1
        }
    }

    return true;
}

console.log(anagrams("abc", "cba"));

// let str1 = "abc"
// let str2 = "bca"

// console.log(str2.split("").sort().join(""))
