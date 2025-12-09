const nums = [0,1,2,2,3,0,4,2];
const val = 2;
let i=0;
for(let j=0;j<nums.length;j++)
{
   if(nums[j]!==val)
   {
     nums[i]=nums[j];
     i++;
   }
}

console.log(nums.slice(0,i))