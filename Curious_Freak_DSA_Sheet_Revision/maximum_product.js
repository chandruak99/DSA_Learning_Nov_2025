const arr=[-2,6,-3,-10,0,2];

function maximumProduct(arr)
{
   let max=arr[0];
   let currMax=arr[0];
   let currMin=arr[0];

   for(let i=1;i<arr.length;i++)
   {
      if(arr[i]<0)
      {
        [currMax,currMin]=[currMin,currMax];
      }

      currMax=Math.max(arr[i],arr[i]*currMax);
      currMin=Math.min(arr[i],arr[i]*currMin);
    //   console.log("currMax",currMax)
    //   console.log("currMin",currMin)
      max=Math.max(max,currMax)
   }

   return max;

}
console.log(maximumProduct(arr));