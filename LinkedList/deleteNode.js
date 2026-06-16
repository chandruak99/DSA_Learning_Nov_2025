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

    deleteNode(value)
    {
        if(this.head===null)
        {
            return;
        }
        if(this.head.data===value)
        {
            this.head=this.head.next;
            return;
        }


        let current=this.head;
        let previous=null;

        while(current!==null && current.data!==value) 
        {
            previous=current;
            current=current.next;
        }


        if(current!==null && previous)
        {
            previous.next=current.next;
        }
    }
}


let myList=new LinkedList();

myList.append("Apple");
myList.append("Banana");
myList.append('Cherry');

console.log("<----Traversal of LinkedList----->");
let current=myList.head;

while(current!==null)
{
    process.stdout.write(`${current.data}--->`)
    current=current.next;
}

myList.deleteNode("Cherry");

console.log("After Deleteing <----Traversal of LinkedList----->");
current=myList.head;
while(current!==null)
{
    process.stdout.write(`${current.data}--->`)
    current=current.next;
}
