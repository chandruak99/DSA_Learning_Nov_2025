// const arr=[1,2,1,3,4,2,3];

// const k=4;

const arr=[4,1,1];
const k=2;
function countDistinctElements(arr,k)
{
   let result=[];
   let freq=new Map();
   for(let i=0;i<k;i++)
   {
     freq.set(arr[i],(freq.get(arr[i])||0)+1);
   }
   result.push(freq.size);

   for(let i=k;i<arr.length;i++)
   {
      if(freq.get(arr[i-k])>1)
      {
         freq.set(arr[i-k],(freq.get(arr[i-k]))-1);
      }
      else
      {
          freq.delete(arr[i-k]);
      }

      freq.set(arr[i],(freq.get(arr[i])||0)+1);
      result.push(freq.size);

   }

   return result;
}

console.log(countDistinctElements(arr,k))