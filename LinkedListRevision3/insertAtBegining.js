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



let list=new LinkedList();

list.prepend("Apple");
list.prepend("Banana");
list.prepend("Cherry");

let current=list.head;


while(current!==null)
{
    console.log(`${current.data}->`);
    current=current.next;
}