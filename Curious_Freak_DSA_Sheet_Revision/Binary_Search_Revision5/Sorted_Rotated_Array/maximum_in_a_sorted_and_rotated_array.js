const arr=[5,6,1,2,3,4];




function findMaximum(arr)
{
   let left=0;
   let right=arr.length-1;
   let maximum=-Infinity;


   while(left<=right)
   {
       let mid=Math.floor((left+right)/2);

       if(arr[left]<=arr[right])
       {
          maximum=Math.max(maximum,arr[right]);
          break;
       }

       if(arr[left]<=arr[mid])
       {
          maximum=Math.max(maximum,arr[mid]);
          left=mid+1;
       }
       else
       {
         maximum =Math.max(maximum,arr[right]);
          right=mid-1;
       }
   }

   return maximum;
}


console.log(findMaximum(arr));