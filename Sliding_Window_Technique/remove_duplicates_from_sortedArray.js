const nums=[0,0,1,1,1,2,2,3,3,4];



function removeDuplicates(nums)
{
    let left=0;
    let right=1;

    while(right<nums.length)
    {
        if(nums[left]!==nums[right])
        {
           left++;
           nums[left]=nums[right];
        }
        right++;
    }

    console.log("left==",left)
    return nums.slice(0,left+1)
}

console.log(removeDuplicates(nums))