// const nums=[3,2,2,3];
// const target=3;

const nums=[0,1,2,2,3,0,4,2];
const target=2;


function removeDuplicates(nums,target)
{
    let left=0;
    let right=0;

    while(right<nums.length)
    {
        if(nums[right]!=target)
        {
            nums[left]=nums[right];
            left++;
        }
        right++;
    }

    return nums.slice(0,left);
}

console.log(removeDuplicates(nums,target))