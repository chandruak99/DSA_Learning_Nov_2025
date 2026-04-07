const arr=[2,3,-8,7,-1,2,3];


function maximumSubarray(arr)
{
   let max=-Infinity;
   let sum=0;

   for(let i=0;i<arr.length;i++)
   {
      sum =sum+arr[i];
      if(sum>max)
      {
        max=sum;
      }

      if(sum<0)
      {
        sum=0;
      }
   }

   return max;
}
console.log(maximumSubarray(arr))