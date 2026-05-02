const nums=[1,0,-1,0,-2,2];
const  target=0;
function fourSum(nums,target)
{
   nums.sort((a,b)=>a-b)
    let result=[];
    
    for(let i=0;i<nums.length-3;i++)
    {
        if(i>0 && nums[i]===nums[i-1]) continue;
        for(let j=i+1;j<nums.length-2;j++)
        {
            if(j>i+1 && nums[j]===nums[j-1]) continue;
            let left=j+1;
            let right=nums.length-1;
           

            while(left<right)
            {    
                
                let sum=nums[i]+nums[j]+nums[left]+nums[right]

                if(sum===target)
                {
                     result.push([nums[i],nums[j],nums[left],nums[right]]);

                     while(left <right && nums[left]) {
                        
                        left++
                        }
                    while(left < right)
                    {
                        nums[right]===nums[right-1];
                        right--;
                    }
                     left++;
                     right--;
                }
                else if(sum>target)
                {
                    right--;
                }
                else 
                {
                    left++;
                }
            }
        }
    }

    return result;
}

console.log(fourSum(nums,target));



