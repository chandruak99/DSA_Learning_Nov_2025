const arr=[1,2,2,3];

const target=2;


function lowerBound(arr,target)
{
   let left=0;
   let right=arr.length-1;
   let ans=-1;

   while(left<=right)
   {
      let mid=Math.floor((left+right)/2);
      if(arr[mid]>=target)
      {
           console.log("if")
           ans=mid;
           right=mid-1;
      }
      else
      {
         left=mid+1;
      }

   }

   return ans;
}

console.log(lowerBound(arr,target))