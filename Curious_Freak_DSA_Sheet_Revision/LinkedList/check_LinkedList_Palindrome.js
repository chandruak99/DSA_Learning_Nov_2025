
//using bruteforce method using stack 
class Node
{
    constructor(data)
    {
        this.data=data;
        this.next=null;
    }
}


class LinkedList
{

    constructor()
    {
        this.head=null;
    }
  appendAtLast(data)
  {
      
      const newNode=new Node(data);

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
        process.stdout.write(`${current.data}--->`);
        current=current.next;
      }

  }

  checkListIsPalindrome(head)
  {
      let current=head;

      let stack=[];

      while(current!==null)
      {
           stack.push(current.data)
           current=current.next;
      }

    //   console.log("stack==",stack)

      current=head;

      while(current!==null)
      {
        const temp=stack.pop();
        if(current.data!==temp)
        {
            // console.log("current.data",current.data);
            // console.log("temp==",temp)
            return false;
        }
        current=current.next;
      }

      return true;
  }
}


let myList=new LinkedList();



myList.appendAtLast(1);
myList.appendAtLast(2);
myList.appendAtLast(3);
myList.appendAtLast(2);
myList.appendAtLast(1);

myList.printLinkedList(myList.head)

console.log(myList.checkListIsPalindrome(myList.head))







