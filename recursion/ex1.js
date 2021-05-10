function computeSum(arr){
    if(arr.length === 1){
      return arr[0];
    }
    else{
      return arr.pop() + computeSum(arr);
    }
  }
  
  console.log(computeSum([7, 8, 9])); 

  // 7 + computeSum([8,9])
  //7 + 8 + computeSum([9])
  // 7+8 +9