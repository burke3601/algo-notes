//write a function called power which accepts a base and an exponent. the function should return the power of the base to the exponent. this function should mimic the functionality of Math.pow()

// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16
function power(num1, num2){
    if(num2===0) return 1

    return num1 * power(num1, num2-1)
    
}

console.log(power(2,4))