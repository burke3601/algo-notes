//function accepts a variable number of arguments and checks whether there are any duplicates among the argurments passed in

// function areThereDuplicates(...arg) {

//     let frequency = {};
    
//     for (let val in arg) {
//         frequency[arg[val]] = (frequency[arg[val]] || 0) + 1
//     }

//     for(let key in frequency){
//         if(frequency[key] > 1)
//             return true
        
        
//     }
//     return false;



// }

// console.log(areThereDuplicates(1,2,3,5,1))

//multiple pointers

function areThereDuplicates(...args) {

    args.sort();
    console.log(args.sort());
    let start = 0;
    let next = 1;

    while(next < args.length){
        if(args[start] === args[next]){
            return true
        }
        start++
        next++
    }
    return false
    
}

console.log(areThereDuplicates("h", "e", "l", "l", "o"))