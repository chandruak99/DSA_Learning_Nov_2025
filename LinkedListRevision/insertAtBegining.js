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
        let newNode=new Node(data);

        newNode.next=this.head;
        this.head=newNode;
    }
}


const myList=new LinkedList();


myList.prepend("Apple");
myList.prepend("Banana");
myList.prepend("Cherry");


console.log("<----Traversing List----->");


let current=myList.head;

while(current!==null)
{
    console.log(`Node data: ${current.data}`);
    current=current.next;
}