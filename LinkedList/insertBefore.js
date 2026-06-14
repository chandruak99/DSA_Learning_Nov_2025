class Node{
    constructor(data)
    {
        this.data=data;
        this.next=null;
    }
}


class LinkedList{
    constructor()
    {
        this.head=null;
    }

    prepend(data)
    {
        const newNode=new Node(data);
        newNode.next=this.head;
        this.head=newNode;
    }
}

const myList=new LinkedList(["Carrot"]);

myList.prepend("Apple");
myList.prepend("Banana");
myList.prepend("Cherry");

console.log("-----Traversing the List------")

let current=myList.head;

while(current!==null)
{
    console.log(`Node data: ${current.data}`);
    current=current.next;
}




