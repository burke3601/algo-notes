//BST

class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(value){
        var newNode = new Node(value);
        if (this.root === null){
            this.root = newNode;
            return this;
        } else {
            var current = this.root;
            while(true){
                if(value === current.value) return undefined;
                if(value < current.value){
                    if(current.left === null){
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }
                } else if(value > current.value){
                    if(current.right === null){
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }

    conatins(value){
        if(this.root === null)return false;
        var current = this.root;
           var found = false;
        while(!found && current){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                return true;
            }
        }
        
        return false;
    }
    //breadth first search
    BFS(){
        var node = this.root;
        var data = [];
        var queue = [];
    
        queue.push(node);
        while(queue.length){
            node = queue.shift();
            data.push(node.value);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
    }
    // depth first search
    DFSPreOrder(){
        var data = [];
        

        function traverse(node){
            data.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            
        }
        traverse(this.root); 
        return data;

    }

    DFSPostPrder(){
        var data = [];

        function traverse(node){
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.value);
        }
        traverse(this.root)
        return data;

    }
    DFSInOrder(){
        var data = [];
        

        function traverse(node){
            
            if(node.left) traverse(node.left);
            data.push(node.value);
            if(node.right) traverse(node.right);
            
        }
        traverse(this.root); 
        return data;

    }




}





var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

console.log(tree.BFS());

console.log(tree.DFSPreOrder())
console.log(tree.DFSPostPrder())
console.log(tree.DFSInOrder())