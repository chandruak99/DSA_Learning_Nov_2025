
const arr=[2,3,7,8];
class Node
{
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

function reverse(head)
{
    if(head===null || head.next===null)
    {
        return head;
    }

    let newHead=reverse(head.next);
    let front=head.next;
    front.next=head;
    head.next=null;
    return newHead;
}



let linkedListHead=convertArrayToList(arr);
printLinkedList(linkedListHead);

linkedListHead=reverse(linkedListHead);
printLinkedList(linkedListHead);
