// let states = ["ga", "fl", "co"]

// console.log(states.findIndex("fl"))

function linearSearch(arr, value){

    for(let i = 0; i < arr.length; i ++){
        console.log(arr[i])
        if(arr[i] === value){
            return value
        }
        else {
            return -1
        }
    }

}

console.log(linearSearch([1,2,3,4,5], 7))