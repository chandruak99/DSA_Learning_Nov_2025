class Node{
    constructor(data)
    {
        this.data=data;
        this.next=null;
    }
}


class LinkedList
{
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
}


const myList=new LinkedList();


myList.append("Chandru");
myList.append("Prakash");
myList.append("Ram");


let current=myList.head;


console.log("<----Traversing the List---->");


while(current!==null)
{
    console.log(`Node data: ${current.data}`);
    current=current.next;
}