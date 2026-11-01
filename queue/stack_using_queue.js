// const arr=[1,2,3];

// arr.shift();
// console.log(arr)


class MyStack {
    constructor() {
        this.q = [];
    }

    push(x) {
        // Get the current number of elements
        let n = this.q.length;
        
        // Push the new element
        this.q.push(x);
        
        // Rotate all previous elements behind the new element
        console.log("before rotate",this.q)
        for (let i = 0; i < n; i++) {
            this.q.push(this.q.shift());
        }

        console.log("after rotate",this.q)
    }

    pop() {
        if (this.q.length === 0) {
            return -1;
        }
        return this.q.shift();
    }

    top() {
        if (this.q.length === 0) {
            return -1;
        }
        return this.q[0];
    }

    size() {
        return this.q.length;
    }
}


let stack=new MyStack();
stack.push(5);
stack.push(6);
stack.push(7);
