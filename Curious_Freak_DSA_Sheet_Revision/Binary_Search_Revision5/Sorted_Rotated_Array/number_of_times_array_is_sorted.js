// const arr=[5,1,2,3,4];


const arr=[1,2,3,4,5];
function numberOfTimesSorted(arr)
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
        else if(arr[low]<=arr[mid])
        {
            ans=Math.min(ans,arr[low]);
            low=mid+1;
        }
        else
        {
            ans=Math.min(ans,arr[mid]);
            high=mid-1;
        }
         
    }

    return arr.indexOf(ans);
}

console.log(numberOfTimesSorted(arr))