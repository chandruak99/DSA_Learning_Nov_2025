// const nums=[2,5,6,0,0,1,2];
// const target=3;

const nums=[1,1,1,1,1,1,13,1,1,1,1,1]
const target=13;



function searchRotatedArray(nums)
{
    let left=0;
    let right=nums.length-1;

     while(left<=right)
     {
        console.log("left==",left);
        console.log("right==",right)
        let mid=Math.floor((left+right)/2);


        if(nums[mid]===target)
        {
            return true;
        }
        else if(nums[left]===nums[mid] && nums[mid]===nums[right])
        {
            left++;
            right--;
        }
        else if(nums[left]<=nums[mid])
        {
            if(nums[left]<=target && target < nums[mid])
            {
                right=mid-1;
            }
            else
            {
                left=mid+1
            }
        }
        else
        {
            if(nums[mid] < target && target<=nums[right])
            {
                left=mid+1
            }
            else
            {
                right=mid-1;
            }
        }
        
     }

     return false;
}

console.log(searchRotatedArray(nums));