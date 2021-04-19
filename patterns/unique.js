//implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. there can be negative numbers in the array, but it will always be sorted

function countUniqueValues(arr){
    if(arr.length === 0) return 0;
   let i = 0;
   for(let j = 1; j <arr.length; j++){
       if(arr[i] !== arr[j]){
           i ++;
           arr[i] = arr[j];
       }
       console.log(i,j)
   }   
   return i + 1 
}; 

console.log(countUniqueValues([-8,7,99,8765,6789097]))