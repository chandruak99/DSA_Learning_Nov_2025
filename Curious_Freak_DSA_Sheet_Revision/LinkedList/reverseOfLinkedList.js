const arr=[2,4,5,6,7];


class Node{
    constructor(data)
    {
        this.data=data;
        this.next=null;
    }
}


function convertArrayToList(arr)
{
    
    const head=new Node(arr[0]);
    let current=head;

    for(let i=1;i<arr.length;i++)
    {
        current.next=new Node(arr[i]);
        current=current.next;
    }

    return head;
}

function printLinkedList(head)
{
    let current=head;

    while(current!==null)
    {
        process.stdout.write(`${current.data}--->`);
        current=current.next;
    }
    console.log()

    return head;
}

function countLength(head)
{
    let current=head;
    let count=0;

    while(current!==null)
    {
        count++;
        current=current.next;
    }
    return count;
}

function searchElement(head,value)
{
    let current=head;

    while(current!==null)
    {
        if(current.data===value)
        {
            return true;
        }
        current=current.next;
    }

    return false;
}


function reverseLinkedList(head)
{
   let temp=head;
   let prev=null;

   while(temp!==null)
   {
     let front=temp.next;
     temp.next=prev;
     prev=temp;
     temp=front;
   }
   return prev;
}


let linkedListHead=convertArrayToList(arr);
printLinkedList(linkedListHead)
linkedListHead=reverseLinkedList(linkedListHead);

printLinkedList(linkedListHead)


// let length=countLength(linkedListHead);
// console.log(searchElement(linkedListHead,10));