//POPPING LISTS

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0
    }
    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;

        }
        this.length++;
        return this;

    }
    pop(){
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    // traverse(){
    //     var current = this.head;
    //     while(current){
    //         console.log(current.val);
    //         current = current.next;
    //     }
    // }
}

var list = new SinglyLinkedList()
list.push("hello")
list.push("goodbye")
list.push("!")

console.log(list.pop())
console.log(list)

console.log(list.pop())
console.log(list)




