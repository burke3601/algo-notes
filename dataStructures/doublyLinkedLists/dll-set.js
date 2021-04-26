// Set

//Push

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(){
        this.head =  null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop(){
        if (!this.head) return undefined;
        var poppedNode = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }
    shift(){
        if (this.length === 0) return undefined; 
        var oldHead = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else{
        this.head = oldHead.next;
        this.head.prev = null;
        oldHead.next = null;
        this.length--;
        return oldHead;
        }
    }
    unshift(val){
       var newNode = new Node(val);
       if(this.length === 0){
           this.head = newNode;
           this.tail = newNode;
       } else {
           this.head.prev = newNode;
           newNode.next = this.headl
           this.head = newNode
       }
       this.length ++
       return this

    }
    get(index){
        if(index < 0 || index >= this.length) return null;
        if(index <= this.length/2){
            // console.log('from the beginning')
            var count = 0;
            var current = this.head;
            while(count != index){
                current = current.next;
                count ++
            }
            return current;
        } else {
            // console.log('from the end')
            var count = this.length -1;
            var current = this.tail;
            while(count !== index){
                current = current.prev;
                count --;
            }
            return current;
        }
     } 
     set(index, val){
         let foundNode = this.get(index);
         if(foundNode != null) {
             foundNode.val = val;
             return true;
         }
         return false
     }
}

list = new DoublyLinkedList
list.push("Harry");
list.push("Ron");
list.push("Hermoine");
list.push(300);
list.push(400);
list.push(500);


//console.log(list)

console.log(list.set(0, "Hagrid"))
console.log(list.get(0))





// console.log(list.shift())
// console.log(list.shift())


