// --- YOUR TEST CODE ---

// 1. Create an instance of your LinkedList



// A single node
class Node {
  constructor(data) {
    this.data = data;
    this.next = null; // Points to the next node
  }
}

// The LinkedList chain
class LinkedList {
  constructor() {
    this.head = null;
  }

  // Fast O(1) insertion at the very beginning
  prepend(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }
}
const myList = new LinkedList();


// 2. Add some data
myList.prepend("Apple");
myList.prepend("Banana");
myList.prepend("Cherry");

// 3. Print the whole list structure to the console
console.log("--- My Linked List ---");
console.dir(myList, { depth: null }); 

// 4. Bonus: Let's loop through it to print the items nicely
console.log("\n--- Traversing the List ---");
let current = myList.head;
while (current !== null) {
  console.log(`Node Data: ${current.data}`);
  current = current.next; // Move to the next link in the chain
}