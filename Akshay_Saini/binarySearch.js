const arr=[-1,0,3,5,9,12]
const target=9;



function binarySearch(arr,target)
{
    let left=0;
    let right=arr.length-1;


    while(left<=right)
    {
        let mid=Math.floor((left+right)/2);
        // console.log("mid==",mid)
        if(arr[mid]===target)
        {
            return mid;
        }
        else if(target < arr[mid])
        {
            right=mid-1;
        }
        else {
            left=mid+1;
        }
    }

}

console.log(binarySearch(arr,target))
