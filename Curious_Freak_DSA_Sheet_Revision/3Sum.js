// const arr=[1,4,45,6,10,8];
// const target=13;

const arr= [40, 20, 10, 3, 6, 7];
const target=24

function threeSum()
{

for(let i=0;i<arr.length-2;i++)
{
    let left=i+1;
    let right=arr.length-1;

    while(left<right)
    {
        let sum =arr[i]+arr[left]+arr[right];
        if(sum===target)
        {
            return true;
        }
        else if(sum > target)
        {
            right--;
        }
        else{
            left++;
        }
    }

    
}
 return -1;
}

console.log(threeSum(arr,target))