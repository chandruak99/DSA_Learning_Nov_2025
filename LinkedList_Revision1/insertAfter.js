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

    insertAtEnd(data)
    {
        const newNode=new Node(data);
  
        if(this.head===null)
        {
            this.head=newNode;
        }
        else
        {
            let current=this.head;

            while(current.next!==null)
            {
                current=current.next;
            }
           
            current.next=newNode;
            
        }

    }
}

let myList=new LinkedList();

myList.insertAtEnd("Apple");
myList.insertAtEnd("Banana");
myList.insertAtEnd("Cherry");


let current=myList.head;
while(current!==null)
{
    process.stdout.write(`${current.data}--->`);
    current=current.next;
}