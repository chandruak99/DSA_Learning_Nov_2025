const arr=[0,0,1,1,1];

const target=1;

function lowerBound(arr,target)
{
    let low=0;
    let high=arr.length-1;
    let ans=-1;

    while(low<=high)
    {
        let mid=Math.floor((low+high)/2);
         if(arr[mid]>=target)
         {
            ans=mid;
            high=mid-1;
         }
         else
         {
            low=mid+1;
         }
    }


    return ans;
    
}

console.log(lowerBound(arr,target))