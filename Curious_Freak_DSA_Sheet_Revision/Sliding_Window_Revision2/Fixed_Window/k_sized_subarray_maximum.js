const arr=[1,2,3,1,4,5,2,3,6];
const k=3;



function maximumKSizedSubarray(arr,k)
{
      let result=[];
      let queue=[];

      for(let i=0;i<arr.length;i++)
      {


        if(queue[0]===i-k)
        {
            queue.shift();
        }

         
        while(queue.length >0 && arr[queue[queue.length-1]] < arr[i])
        {
            queue.pop();
        }


         
         queue.push(i);



        if(i>=k-1)
        {
            
            result.push(arr[queue[0]]);
        }
      }

      return result;

}

console.log(maximumKSizedSubarray(arr,k));