const nums=[1,2,2,3];
const x=2;

function upperBound(nums,x)
{
      let left=0;
      let right=nums.length-1;
      let ans=-1;

      while(left<=right)
      {
        let mid=Math.floor((left+right)/2);
        if(nums[left]>x)
        {
            ans=mid;
            right=mid-1;
        }
        else
        {
            left=mid+1;
        }
      }

      return ans;

}
console.log(upperBound(nums,x));