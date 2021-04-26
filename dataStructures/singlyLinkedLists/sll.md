# Linked List
A data structure that conatins a heas, tail and length property. (think like train cars)
LL consists of nodes and each node has a value and a pointer to another node or null

## Comparisons with Arrays
Lists
- do not have indexes
- connected via nodes with a next pointer
- random access is not allowed
Arrays
- indexed in order
- insertion and deletion can be expensive
- can quickly be accessed at a specific index


## Popping

- if there are no modules in the list, return undefined
- loop through the list until you reach the tail
- set the next property of the 2nd to last node to be null
- set the tail to be the second to last node
- decrement the length of the lists by 1
- return the value of the node removed

## Shift
removing a node from beginning of linked list

## Unshift
adding a new node to the beginning of a list

## Get
retrieving a node by it's position in the Linked List

## Set
Changing the value of a node based on it's position in the LL

## Insert
Adding a node to the Linked List at a specific position

## Remove
Removing a node from the Linked List at a specific position

## Reverse
reversing the Linked List in place

## Big 0 of Singly Linked Lists
- insertion - o(1) (faster than array, average with array is o(N))
- removal - depends... O(1) or O(N) ()
- searching - O(N)
- access - O(N)

faster at insertion and deletion