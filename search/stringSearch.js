//naive string search
//find instances of shorter string in a longer string

function stringSearch(long, short){
    let counter = 0;

    for (let i = 0; i < long.length; i ++){
        for (let j = 0; j < short.length; j ++){
            console.log(short[j], long[i+j])
           if (short[j] !== long[i+j]){
               console.log("BREAK!!!")
               break;
           }
           if (j === short.length -1){
               console.log("FOUND ONE!!");
               counter ++
           }
        }
    }

    return counter
}

console.log(stringSearch("hector helped heat the hearth", "xxx"))
console.log(stringSearch("hector helped heat the hearth", "he"))