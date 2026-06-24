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
         if(this.head===null)
         {
            this.head=newNode;
         }
         else
         {
            newNode.next=this.head;
            this.head=newNode;
         }
    }
}



let myList=new LinkedList();
myList.prepend("Chandru");
myList.prepend("Surya");
myList.prepend("Prakash")

let current = myList.head;

while(current!==null)
{
    process.stdout.write(`${current.data}--->`);
    current=current.next;
}