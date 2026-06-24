const arr=[1,2,3,4,5];
const target=6;

function binarySearch(arr,target)
{
    
    let low=0;
    let high=arr.length-1;

    while(low<=high)
    {
        let mid=Math.floor((low+high)/2);

        if(arr[mid]===target)
        {
            return mid;
        }
        else if(target<arr[mid])
        {
            high=mid-1;
        }
        else
        {
            low=mid+1;
        }
    }

    return -1;

}

console.log(binarySearch(arr,target))