// const nums=[1,1,1,0,0,0,1,1,1,1,0];
const nums=[0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1];
const k=3;


function maxConsecutiveOnes(nums)
{
   let zeros=0;
   let right=0;
   let left=0;
   let maxLength=-Infinity;

   while(right<nums.length)
   {
      if(nums[right]===0)
      {
        zeros++;
      }

      if(zeros>k)
      {
        if(nums[left]===0)
        {
            zeros--;
        }
        left++;
      }

      if(zeros<=k)
      {
        maxLength=Math.max(maxLength,right-left+1);
      }
      right++;
   }

   return maxLength;
}

console.log(maxConsecutiveOnes(nums))