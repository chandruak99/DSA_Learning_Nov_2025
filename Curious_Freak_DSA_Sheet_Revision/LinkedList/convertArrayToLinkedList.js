const arr=[1,2,3,4,5];



// class Node
// {
//     constructor(data)
//     {
//       this.data=data;
//       this.next=null;
//     }
// }

// class LinkedList{
//     constructor()
//     {
//         this.head=null;
//     }


//     convertArrayToLinkedList(arr)
//     {

//        if(!arr && arr.length===0)
//        {
//          return null;
//        }

//        this.head=new Node(arr[0]);
//        let current=this.head;

//        for(let i=1;i<arr.length;i++)
//        {
//            current.next=new Node(arr[i]);
//            current=current.next;
//        }
//     }

// }


// let myList=new LinkedList();
// myList.convertArrayToLinkedList(arr);

// let current=myList.head;
// while(current!==null)
// {
//     process.stdout.write(`${current.data}-->`);
//     current=current.next;
// }



class Node{
    constructor(data)
    {
        this.data=data;
        this.next=null;
    }
}


function convertArrayToList(arr)
{
   if(!arr & arr.length===0)
   {
    return null;
   }

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
        process.stdout.write(`${current.data}-->`);
        current=current.next;
    }
}


const linkedListHead=convertArrayToList(arr);
console.log("linkedListHead==",linkedListHead)
printLinkedList(linkedListHead)