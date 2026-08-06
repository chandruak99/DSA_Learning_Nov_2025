class Node{
    constructor(data)
    {
       this.data=data;
       this.next=null;
    }
}


function appendAtEnd(arr)
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

function printLinkedList(head)
{
    let current=head;

    while(current!==null)
    {
        process.stdout.write(`${current.data}--->`);
        current=current.next;
    }
}


function middleElement(head)
{
    let current=head;
    let count=0;
    while(current!==null)
    {
        count++;
        current=current.next;
    }

    let middle=Math.floor(count/2)+1;

    current=head;


    while(current!==null)
    {
        middle=middle-1;
        if(middle===0)
        {
            break;
        }
        current=current.next;
    }

    return current;
}


let listHead=appendAtEnd([11,12,13,14,15,16]);

printLinkedList(listHead);


console.log(middleElement(listHead));










