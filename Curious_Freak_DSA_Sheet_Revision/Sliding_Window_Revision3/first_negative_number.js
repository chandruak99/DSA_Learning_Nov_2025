const arr=[-8,2,3,-6,10];
const k=2;

function firstNegative(arr,k)
{
     let result=[];
     let queue=[];


     for(let i=0;i<arr.length;i++)
     {
         if(arr[i-k]===queue[0])
         {
            queue.shift();
         }
         if(arr[i]<0)
         {
            queue.push(arr[i]);
         }
             
        //   console.log("queue",queue)
         if(i>=k-1)
         {
            result.push(queue.length ? queue[0]:0 );
         }
         
     }

     return result;
}

console.log(firstNegative(arr,k))