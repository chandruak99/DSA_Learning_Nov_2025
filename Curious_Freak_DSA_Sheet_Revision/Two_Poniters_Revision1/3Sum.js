// const arr=[1,4,45,6,10,8];

// const target=13;

const arr=[1,-2,1,0,5];
const target=0;

function threeSum(arr,target)
{
    for(let i=0;i<arr.length-2;i++)
    {
        let left=i+1;
        let right=arr.length-1;

        while(left<right)
        {
            let sum=arr[i]+arr[left]+arr[right];

            if(sum===target)
            {
                return true;
            }
            else if(sum>target)
            {
                right--;
            }
            else{
                left++;
            }
        }

    }
    return false;
}

console.log(threeSum(arr,target));