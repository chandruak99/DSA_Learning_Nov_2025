const arr=[2,3,4,5,6,7,8,9,10,1];
const arr=[31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30]

function minimumSorted(arr)
{
  let low=0;
  let high=arr.length-1;
  let ans=Infinity;

  while(low<=high)
  {
     let mid=Math.floor((low+high)/2);

     if(arr[low]<=arr[high])
     {
        ans=Math.min(ans,arr[low]);
        break;
     }

     if(arr[low]<=arr[mid])
     {
         ans=Math.min(ans,arr[low]);
         low=mid+1;
     }
     else
     {
        ans=Math.min(ans,ans[mid]);
        high=mid-1;
     }
  }

  return ans;
}
console.log(minimumSorted(arr));