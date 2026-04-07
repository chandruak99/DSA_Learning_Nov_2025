// const arr=[1,2,3,4,5];
// const target=3;


const arr=[2,4,6,8,10,12];
const target=12;

function binarySearch(arr,target)
{
    let left=0;
    let right=arr.length-1;

    while(left<right)
    {
        let mid=Math.floor(left+right/2);
        if(arr[mid]===target)
        {
            return mid;
        }
        else if(target<arr[mid])
        {
            right=mid-1;
        }
        else{
            left=mid+1;
        }
    }

    return -1;
}

console.log(binarySearch(arr,target));

