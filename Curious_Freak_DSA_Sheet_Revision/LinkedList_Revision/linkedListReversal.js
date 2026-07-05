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


    appendAtLast(data)
    {
        let newNode=new Node(data)
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

         return this.head;
    }
}

function printList(head)
{
  let current=head;

  while(current!==null)
  {
     process.stdout.write(`${current.data}--->`);
     current=current.next;
  }

  console.log()
}

function reversal(head)
{
       let temp=head;
       let prev=null;

       while(temp!==null)
       {
         let front=temp.next;
         temp.next=prev;
         prev=temp
         temp=front;
       }

       return prev;
}

function reversalRecursion(head)
{
    if(head===null || head.next===null)
    {
        return head;
    }

    let newHead=reversalRecursion(head.next);
    let front=head.next;
    front.next=head;
    head.next=null;
    return newHead;
}

let myList=new LinkedList();

myList.appendAtLast(12);
myList.appendAtLast(13);
myList.appendAtLast(14);
myList.appendAtLast(15);

printList(myList.head)

// let reversedList=reversal(myList.head);
let reversedList=reversalRecursion(myList.head)

printList(reversedList)

