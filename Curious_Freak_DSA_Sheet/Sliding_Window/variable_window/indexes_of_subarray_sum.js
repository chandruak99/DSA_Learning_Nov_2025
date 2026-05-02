// const arr=[1,2,3,7,5];
// let target=12;
const arr=[-5,8]
// const arr=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const target=15;

// const arr=[5,3,4];
// const target=2;

// function indexesOfSubarray(arr,target)
// {
//       for(let i=0;i<arr.length;i++)
//       {
//          let currentSum=0;
//          for(let j=i;j<arr.length;j++)
//          {
//             currentSum=currentSum+arr[j];
//             if(currentSum===target)
//             {
//                 return [i+1,j+1];
//             }
//          }
//       }

//     return -1;
// }




function indexesOfSubarray(arr,target)
{
   let left=0;
   let currentSum=0;
   for(let right=0;right<arr.length;right++)
   {
      currentSum+=arr[right];

       while(currentSum > target && left<right)
       {
         currentSum-=arr[left];
         left++;
       }

       if(currentSum===target)
       {
        return [left+1,right+1];
       }
   }
   return [-1]
}
console.log(indexesOfSubarray(arr,target));