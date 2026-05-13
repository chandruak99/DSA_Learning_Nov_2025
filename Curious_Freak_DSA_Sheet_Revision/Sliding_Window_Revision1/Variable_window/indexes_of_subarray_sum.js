const arr=[1,2,3,7,5];
const target=12;


// function indexesOfSubarray(arr)
// {
//      let currentSum=0;

//      let left=0;

//      for(let right=0;right<arr.length;right++)
//      {
//          currentSum+=arr[right];


//          while(currentSum>target & left <right)
//          {
//             currentSum-=arr[left];
//             left++;
//          }

//          if(currentSum===target)
//          {
//             return [left+1,right+1];
//          }
//      }

//      return [-1];
// }

console.log(indexesOfSubarray(arr,target))