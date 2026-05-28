const arr=[0,-1,2,-3,1];
const target=-2;

// const arr=[1,-2,1,0,5];
// const target=0;



//using two pointer technique;
// function findPairSum(arr,target)
// {
//    let left=0;
//    let right=arr.length-1;
//    let sum;
//    while(left<=right)
//    {
//          sum=arr[left]+arr[right];
         
//          if(sum===target)
//          {
//             return true;
//          }
//          else if(sum > target)
//          {
//             right--;
//          }
//          else
//          {
//             left++;
//          }
//    }

//    return true;
// }

// console.log(findPairSum(arr));

//using Set Approach
function findPairSum(arr,target)
{
   let set=new Set();

   for(let i=0;i<arr.length;i++)
   {
      let complement=target-arr[i];
      if(set.has(complement))
      {
        return true;
      }
   }
   return false;
}

console.log(findPairSum(arr,target))
