const arr=[1,1,0,1,1,1];

function consecutiveOnes(arr)
{
    let count=0;
    let maxLength=-Infinity;
   for(let i=0;i<arr.length;i++)
   {
     if(arr[i]===1)
     {
        count++;
     }
     else
     {
        count=0;
     }

     if(count> maxLength)
     {
        maxLength=count;
     }
   }

   return maxLength;
}

console.log(consecutiveOnes(arr));