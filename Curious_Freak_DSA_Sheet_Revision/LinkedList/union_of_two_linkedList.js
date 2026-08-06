class Node 
{
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


     appendAtEnd(data)
     {
        let newNode=new Node(data);

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


     printLinkedList(head)
     {
        let current=head;


        while(current!==null)
        {
            process.stdout.write(`${current.data}-->`);
            current=current.next;
        }

        console.log("")
     }


   
}

function unionofLists(head1,head2)
{
    let temp1=head1;
    let temp2=head2;

    let set=new Set();
    while(temp1!==null)
    {
        
        set.add(temp1.data);
        temp1=temp1.next;

    }

    while(temp2!==null)
    {
        
        set.add(temp2.data);
        temp2=temp2.next;

    }


    return set;
}


function convertSetToList(set)
{

    const arr=Array.from(set);

    console.log("arr=",arr)

    let head=new Node(arr[0]);
    let current=head;
    for(let i=1;i<arr.length;i++)
    {
       current.next=new Node(arr[i]);
       current=current.next;
    }

    return head;
}




let myList=new LinkedList();



myList.appendAtEnd(9);
myList.appendAtEnd(6);
myList.appendAtEnd(4);
myList.appendAtEnd(3);
myList.appendAtEnd(8);


let list2=new LinkedList();


list2.appendAtEnd(1);
list2.appendAtEnd(2);
list2.appendAtEnd(8);
list2.appendAtEnd(6);
list2.appendAtEnd(2);



myList.printLinkedList(myList.head);

list2.printLinkedList(list2.head);

let unionSet=unionofLists(myList.head,list2.head)

let unionList=new LinkedList();

let resultHead=convertSetToList(unionSet);

unionList.printLinkedList(resultHead)



