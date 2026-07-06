// const arr=[5,6,1,2,3,4];

// const target=1;

const arr=[3,1,2];
const target=1;

function sortedRotatedMinimum(arr,target)
{
   let low=0;
   let high=arr.length-1;
   let min=Infinity;

   while(low<=high)
   {
      let mid=Math.floor((low+high)/2);

      if(arr[low]<=arr[high])
      {
         min=Math.min(min,arr[low]);
         break;
      }

      if(arr[low]<=arr[mid])
      {
        min=Math.min(min,arr[low]);
        low=mid+1;
      }
      else
      {
         min=Math.min(min,arr[mid]);
         high=mid-1;
      }
   }


   return min;
}

console.log(sortedRotatedMinimum(arr,target))