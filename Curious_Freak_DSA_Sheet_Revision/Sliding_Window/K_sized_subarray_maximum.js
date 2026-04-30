const arr=[1, 2, 3, 1, 4, 5, 2, 3, 6];
const k = 3;

function k_sized_subaary(arr,k)
{
   let queue=[];
   let result=[];
   


   for(let i=0;i<arr.length;i++)
   {
         
        if(queue.length > 0 && queue[0]===i-k)
        {
            queue.shift();
        }
        while(queue.length >0 && arr[i]>=arr[queue[queue.length-1]])
        {
           queue.pop();
        }

        // console.log("before queue==",queue)
        queue.push(i);
        // console.log("after queue==",queue)
        if(i>=k-i)
        {
            result.push(arr[queue[0]]);
        }



   }

   return result;
}

console.log(k_sized_subaary(arr,k))
