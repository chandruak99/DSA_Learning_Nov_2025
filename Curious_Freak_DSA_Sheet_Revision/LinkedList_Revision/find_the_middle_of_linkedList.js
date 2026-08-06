const arr=[1,2,3,4,5];



class Node{
    constructor(data)
    {
        this.data=data;
        this.next=null;
    }
}


function convertArrayToList(arr)
{
   let head=new Node(arr[0]);
   let current=head;

   for(let i=1;i<arr.length;i++)
   {
     current.next=new Node(arr[i]);
     current=current.next;
   }

   return head;
}


// function reverseLinkedList(head)
// {
//     if(head===null || head.next===null)
//     {
//         return head;
//     }

//     let newHead=reverseLinkedList(head.next);
//     let front=head.next;
//     front.next=head;
//     head.next=null;
//     return newHead;
// }


function findMiddle(head)
{
  let slow=head;
  let fast=head;

  while(fast!==null && fast.next!==null)
  {
    slow=slow.next;
    fast=fast.next.next;
  }

  return slow;
}

function printLinkedList(head)
{
   let current=head;


   while(current!==null)
   {
     process.stdout.write(`${current.data}--->`);
     current=current.next;
   }
   console.log();

}


let linkedListHead=convertArrayToList(arr);

printLinkedList(linkedListHead)


let middle=findMiddle(linkedListHead);

console.log("middleNode==",middle)