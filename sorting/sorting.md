# Sorting

### Built in array.sort
 - takes a comparator function
 - looks at elements (a and b)

 ## Bubble

a sorting algo where the largest values bubble to the top

swap
```
function swap(arr, idx1, idx2){
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idk2] = temp
}
```

or es2015 
```
    const swap = (arr, idx1, idx2) => {
        [arr[idx1],arr[idx2]] = [arr[idx2], arr[idx1]]
    }

```

## Selection

similar to bubble, but instead of first placing large values into sorted positions, it places small values into sorted position

## Insertion

builds up the sort by gradually creating a larger portion which is always sorted

## Comparison Bubble, Selection, and Insertion
 - worst case time complexity o(n^2) (quadratic)
 - best case time complexity is O(n) for bubble and insertion;

 - Bubble Sort O(n^2)
 - Insertion Sort O(n^2)
 - Selection Sort O(n^2)
 - Quick Sort o(n log(n))
- Merge Sort o(n log(n))


## Merge Sort

- the algorithm is more efficient but not as simple
- combination or merging, splitting, and sorting
- exploits the fact that arrays of 0 or 1 elements are sorted
- works by decomposing an array into smaller arrays of 0 or 1 elements
- o(n log n) time complxity (best and worst cases)
- it will continue to split and merge
- space complexity O(n) (uses more space than bubble)


## Quick Sort

- pivot helper (does not make a new array)
    - runtime can change based on the pivot

best time complexity is O(n log n)

## Radix
