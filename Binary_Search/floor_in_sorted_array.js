const arr=[1,2,8,10,10,12,19];
const x=5;

// const arr=[1,2,8,10,10,12,19];
// const x=11;

// const arr=[1,2,8,10,10,12,19];
// const x=0;

//Lower Bound Binary Algorithm
function floorInSortedArray(arr,x)
{
    let left=0;
    let right=arr.length-1;
    let ans=-1;
    while(left<=right)
    {
        let mid=Math.floor((left+right)/2);
        
        if(arr[mid]<=x)
        {
            ans=mid;
            left=mid+1;
        }
        else
        {
            right=mid-1;
        }
    }

    return ans;

}

console.log(floorInSortedArray(arr,x));