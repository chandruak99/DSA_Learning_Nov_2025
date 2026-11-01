

class QueueNode {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}

class MyQueue {
    constructor() {
        this.frontNode = null;
        this.rearNode = null;
        this.count = 0;
    }

    // Function to insert an element at the rear of the queue.
    enqueue(x) {
        let newNode = new QueueNode(x);
        if (this.rearNode === null) {
            this.frontNode = this.rearNode = newNode;
        } else {    
            this.rearNode.next = newNode;
            this.rearNode = newNode;
        }
        this.count++;
    }

    // Function to remove front element from the queue.
    dequeue() {
        if (this.frontNode === null) {
            return;
        }
        let temp = this.frontNode;
        this.frontNode = this.frontNode.next;
        
        if (this.frontNode === null) {
            this.rearNode = null;
        }
        this.count--;
    }

    // Function to return front element if not empty, else -1.
    getFront() {
        if (this.frontNode === null) {
            return -1;
        }
        return this.frontNode.data;
    }

    // Function to return true if the queue is empty else false.
    isEmpty() {
        return this.frontNode === null;
    }

    // Function to return the number of elements currently in the queue.
    size() {
        return this.count;
    }
}