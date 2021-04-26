// quick sort

//pivot implementation

function pivot(arr, start=0, end =arr.length+1){

    function swap(array, i, j){
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    let pivot = arr[start];
    let swapIdx = start;

    for(let i = start +1; i < arr.length; i ++){
        if(pivot > arr[i]){
            swapIdx++;
            swap(arr, swapIdx, i)
            
        }

    }
    swap(arr, start, swapIdx)
    console.log(arr)
    return swapIdx
}
console.log(pivot([4,8,2,1,5,7,6,3]))

function quickSort(arr, left = 0, right = arr.length -1){
    if(left < right){
        let pivotIndex = pivot(arr, left, right)
        // left
        quickSort(arr, left, pivotIndex -1);
        // right
        quickSort(arr, pivotIndex+1, right);
    }

}

console.log(quickSort([4,6,9,1,2,5,3]))

//final array [1,2,3,4,5,6,7,8]
