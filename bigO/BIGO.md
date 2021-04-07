# Big O Notation

(balancing act, writing readable and functional code)

- linear = n
- quadratic = n^2 
    - like a nested for loop
- constant =1 O(1)
    - as n grows, the runtime grows in an 1:1 ratio
- 

- arithmatic operations are usually constant
- variable assignment is usually contant
- accessing elements in an array or object is constant
- in a loop, the time complexity is the length of the loop times the complexity of whatever happens inside the loop

## Space Complexity
- most primitives (booleans, numbers, undefined, null) are constant space
- strings require O(n) space (where n is string length)
- reference typed are generally O(n), where n is the length (for arrays) or the number of keys (for objects)


- logarithms are the inverse of exponentiation 
- log 2 (8) = 3 => 2^3 = 8

Worse to better:
- O(n^2)
- O(nlog n)
- O(n)
- O(log n)
- O(1)

- Big O can give us a high level understanding of the time or space complexity of an algo
- big o doesn't care about precision only about general trends (linear? quadratic? constant?)
- the time and space complexity (as measured by Big O) depends only on the algorithm, not the hardware used to run the algorithm


