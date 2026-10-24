const arr=[1,2,4,5,7,8,3];


function peakElement(arr)
{
   const n=arr.length;

   if(n===1)
   {
     return 0;
   }
   
   else if(arr[0]>arr[1])
   {
    return 0;
   }
   else if(arr[n-1]>arr[n-2])
   {
    return n-1;
   }

   let low=1;
   let high=arr.length-2;

   while(low<=high)
   {
     let mid=Math.floor((low+high)/2);

     if(arr[mid]>arr[mid-1] && arr[mid]>arr[mid+1])
     {
        // console.log("arr[mid]",arr[mid])
        return mid;
     }
     else if(arr[mid]>arr[mid-1])
     {
         low=mid+1;
     }
     else
     {
         high=mid-1;
     }
   }
}


console.log(peakElement(arr));