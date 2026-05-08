const arr=[-8,2,3,-6,10];

const k=2;


function firstNegative(arr,k)
{
   let result=[];
   let queue=[];
   for(let i=0;i<k;i++)
   {
     if(arr[i]<0)
     {
        queue.push(arr[i]);
     }
   }
   result.push(queue.length ===0 ? 0 :queue[0]);

   for(let i=k;i<arr.length;i++)
   {
      if(queue.length >0 && queue[0]===arr[i-k])
      {  
         queue.shift();
      }

      if(arr[i]<0)
      {
        queue.push(arr[i]);
      }

      if(i>=k-1)
      {
        result.push(queue.length===0 ? 0 : queue[0]);
      }
   }
   return result;
}
console.log(firstNegative(arr,k));