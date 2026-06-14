class Node{
    constructor(data)
    {
       this.data=data;
       this.next=null;
    }
}

class LinkedList{
    constructor(data)
    {
        this.head=null;
    }

    append(data)
    {
        const newNode=new Node(data);

        if(this.head===null)
        {
            this.head=newNode;
            return;
        }


        let current=this.head;
        while(current.next!==null)
        {
            current=current.next;
        }
        current.next=newNode;
    }
}


const myList=new LinkedList();

myList.append("Apple");
myList.append("Banana");
myList.append("Cherry");


console.log("<----Traversal of LinkedList----->");
let current=myList.head;

while(current!==null)
{
    console.log(`Node data: ${current.data}`);
    current=current.next;
}