


// class CircularQueue{

//     constructor(n)
//     {
//        this.items=new Array(n);
//        this.front=-1;
//        this.rear=-1;
//        this.capacity=n;
//     }


//     push(element)
//     {
//        if(this.isFull())
//        {
//          return "Overflow: Queue is full";
//        }

//        if(this.isEmpty())
//        {
//            this.front=0;
//        }

//        this.rear=(this.rear+1) % this.capacity;
//        this.items[this.rear]=element;
      
//        return true;
//     }


//     pop()
//     {
//       if(this.isEmpty())
//       {
//          console.log("Queue is empty")
       
//       }
//       const item=this.items[this.front]
//       if(this.front===this.rear)
//       {
//          this.front=-1;
//          this.rear=-1;
//       }
//       else
//       {
//           this.front=(this.front+1) % this.capacity;
//       }
//       return item;
//     }


//     top()
//     {
//       if(this.isEmpty())
//       {
//          console.log("Queue is empty");
//       }

//       return this.items[this.front];
//     }


//     isEmpty()
//     {
//        return this.front===-1;
//     }

//     isFull()
//     {
//       return (this.rear+1) % this.capacity===this.head;
//     }


//     printQueue()
//     {
      

//        console.log("front",this.front);
//        console.log("rear==",this.rear)

//        for(let i=this.front;i<=this.rear;i++)
//        {
//          console.log("print")
//          console.log(this.items[i%this.capacity]);
//        }
//     }

// }

// let queue=new CircularQueue(5);
// queue.push(10);
// queue.push(12);
// queue.push(13);

// queue.pop();
// queue.printQueue();


console.log(5%3)