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


    insertAt(index,data)
    {
        let newNode=new Node(data);
        if(index===0)
        {
            this.head=newNode;
        }


        let current=this.head;
        let count=0;
        let previous;

        while(count<index && current!==null)
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


    


    prepend(data)
    {
        
        let newNode=new Node(data);


        if(this.head===null)
        {
            this.head=newNode;
            return;
        }


        newNode.next=this.head;
        this.head=newNode;
    }
}

let myList=new LinkedList();

myList.prepend("Apple");
myList.prepend("Banana");
myList.prepend("Cherry");

myList.insertAt(1,"Goa")


console.log("<-----Traversing List----->");


let current=myList.head;
// let result=[];

while(current!==null)
{
    // result.push(current.data);
    process.stdout.write(`${current.data}-->`)
    current=current.next;
}

// console.log(result.join("-->")+"-->null");