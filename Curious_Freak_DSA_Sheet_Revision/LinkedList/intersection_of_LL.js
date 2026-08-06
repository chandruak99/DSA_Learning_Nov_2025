
const arr1=[10,15,30];
const arr2=[3,6,9,15,30];
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



function intersectingNode(head1,head2,d)
{
   let t2=head2;
   let t1=head1;
   while(d)
   {
    d=d-1;
     t2=t2.next;
   }

//    console.log("t2",t2)

   while(t1!==t2)
   {
     console.log("t1",t1);
     console.log("t2",t2)
     console.log(t1===t2);
     t1=t1.next;
     t2=t2.next;
   }

   console.log("t1==",t1)

   return t1;
} 


function findIntersectionNode(head1,head2)
{
       let n1=0;
       let temp1=head1;

       while(temp1!==null)
       {
          n1++;
          temp1=temp1.next;
       }

       let n2=0;
       let temp2=head2;

       while(temp2!==null)
       {
        n2++;
        temp2=temp2.next;
       }

       console.log("n1==",n1);
       console.log("n2==",n2)


       if(n2 >n1)
       {
           return intersectingNode(head1,head2,n2-n1);
       }
       else
       {
          return intersectingNode(head2,head1,n1-n2);
       }


}



function printLinkedList(head)
{
    let current=head;

    while(current!==null)
    {
        process.stdout.write(`${current.data}--->`);
        current=current.next;
    }
}


let linkedListHead1=convertArrayToList(arr1);
let linkedListHead2=convertArrayToList(arr2);
// printLinkedList(linkedListHead)


console.log(findIntersectionNode(linkedListHead1,linkedListHead2))





