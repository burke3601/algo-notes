// queue
// first in first out

//queue with array

// let q = [];

// q.push("first");
// q.push("second");
// q.push("third");

// console.log(q);

// q.shift();
// q.shift();
// console.log(q);
// q.shift();

// can use unshift with pop
// or
//shift with push to get desired FIFO functionality

//makes more sense to make a Q class 


class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}


class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val){
        var newNode = new Node (val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    dequeue(){
        if(!this.first) return null;

        let temp = this.first;
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value
    }
}

let q = new Queue;

q.enqueue('dsfdsaf')
q.enqueue("segundo")
q.enqueue("tercero")

console.log(q)

q.dequeue()
console.log(q)