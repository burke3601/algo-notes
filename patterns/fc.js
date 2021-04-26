// Given two positive integers, find out if the two numbers have the same frequency of digits
// o(N)

function sameFrequency(num1, num2){
    if (num1.toString().length !== num2.toString().length){
        return false
    }

    let frequency1 = {};
    let frequency2 = {};


    for(val of num1.toString()){
        frequency1[val] = (frequency1[val] || 0) +1
    }
    for(val of num2.toString()){
        frequency2[val] = (frequency2[val] || 0) +1
    }

    console.log("***********")
    console.log(frequency1);
    console.log(frequency2);

    for (let key in frequency1){
        if(!(key in frequency2)){
            return false
        }
        if(frequency2[key] !== frequency1[key]){
            return flase
        }

    }
    return true;


}

console.log(sameFrequency(12,23))
