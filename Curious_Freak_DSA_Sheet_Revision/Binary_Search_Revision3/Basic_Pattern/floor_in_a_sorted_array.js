const arr=[1,2,8,10,10,12,19];
const x=5;

function floorInSortedArray(arr,x)
{
       let low=0;
       let high=arr.length-1;
       let ans=-1;

       while(low<=high)
       {
         let mid=Math.floor((low+high)/2);
          if(arr[mid]<=x)
          {
             ans=mid;
             low=mid+1;
          }
          else{
            high=mid-1;
          }
       }

       return ans;
}

console.log(floorInSortedArray(arr,x));