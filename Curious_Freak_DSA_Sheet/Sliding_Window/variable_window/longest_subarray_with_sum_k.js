const arr=[10,5,2,7,1,-10];
const k=15;

// const arr=[-5,8,-14,2,4,12];
// const k=-5;

// const arr=[10,-10,20,30];
// const k=5;

function longestSubarray(arr,k)
{
    let maxlength=-Infinity;
   for(let i=0;i<arr.length;i++)
   {
    let currentSum=0;
    for(let j=i;j<arr.length;j++)
    {
       currentSum+=arr[j];

       if(currentSum===k)
       {
          let length=j-i+1;
          if(length>maxlength)
          {
             maxlength=length;
          }
       }
    }
   }

   return maxlength ===-Infinity ? 0 :maxlength

}

console.log(longestSubarray(arr,k))