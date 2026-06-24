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

    insertAtMiddle(data,index)
    {
        let newNode=new Node(data);
        
        if(index===0)
        {
            this.head=newNode;
        }
        else{

            let count=0;
            let previous;
            let current=this.head;

            while(count<=index && current!==null)
            {
                
                previous=current;
                current=current.next;
                count++;
            }

           
            newNode.next=current;
            if(previous)
            {
                 previous.next=newNode;
            }
        }

    }
}

let myList=new LinkedList();

myList.insertAtEnd("Apple");
myList.insertAtEnd("Mango");
myList.insertAtEnd("Cherry");
myList.insertAtMiddle("Chandru",1);

let current=myList.head;

while(current!==null)
{
    process.stdout.write(`${current.data}-->`);
    current=current.next;
}



