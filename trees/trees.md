# Trees
 - a data structure that consists of nodes in a parent / child relationship
- lists are linear, trees are nonlinear (they can branch)

## Terminology
- Root is the top node in a tree
- Child is a node directly connected to another node when moving away from the Root
- Parent - the converse notion of a child
- Siblings - a group of nodes with the same parent
- Leaf a node with no children
- Edge - the connection between one node and another

## Tree Applications

- HTML DOM (document object model)
- Network Routing
- Abstract Syntax Trees
- Artificial Intelligence
- Computer File Systems
- JSON (javascript object notation)

## Binary Search Trees

- binary search trees
- sorted in an order
- each node can have at most 2 children
- every node to the left of a parent node is always less than the parent
- every node to the right of a parent node if always greater than the parent

## Big O of BST
- insertion - O(log n)
- searching - O(log n)



## Traversing a Tree
- breadth first
- depth search 

### Breadth First Search
visit sibling nodes before looking at a child, working horizontally

- create a quese (can be an array) and a variable to store the values of the nodes
- place the root node in the queue
- loop as long there is anything in the queue
    - dequeue the node from the queue and push the value of the node to the vairable that soters nodes
    - if there is a left property on the node dequeued - add it ot the queue
    - if there is a right on the node dequeued - add it tot he queue
- return the vairable that stores the values

## Depth First
(recursive)
- create a variable to store the values of nodes visited
- store the root of the BST in a variable called current
- write a helper function which accepts a node
    - push the value of the node to the variable that stores the values
    - if the node has a left property, call the helper function with the left property on the node
    -  if the node has a right property, call the helper function with the right property on the node
- invoke the helper function wiht the current variable
- return the array of values


## DFS vs BFS
(it depends on the situation!)

in a wider tree, depth first uses less space (not about time)
