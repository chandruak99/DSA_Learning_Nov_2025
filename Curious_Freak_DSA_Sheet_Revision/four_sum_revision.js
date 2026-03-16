// const nums=[1,0,-1,0,-2,2];
const nums=[2,2,2,2,2]

function fourSum(nums,target){

     let result=[];
     nums.sort((a,b)=>a-b)
     for(let i=0;i<nums.length-3;i++)
     {
        for(let j=i+1;j<nums.length-2;j++)
        {
            let left=j+1;
            let right=nums.length-1;
            

            while(left<right)
            {
                let sum=nums[i]+nums[j]+nums[left]+nums[right];
                if(sum===target)
                {
                    
                    result.push([nums[i],nums[j],nums[left],nums[right]]);
                    if(nums[i]===nums[j]===)
                    left++;
                    right--;
                
                }
                else if(sum <target)
                {
                    left++;
                }
                else
                {
                    right--;
                }
            }
        }
     }

     return result;
}

console.log(fourSum(nums,8))