//Brute Force
// const arr=[1,2,3,4,5];
// const k=3;
// let max=0;
// for(let i=0;i<arr.length-k+1;i++)
// {
//       sum=arr[i]+arr[i+1]+arr[i+2];
//       max=Math.max(max,sum)
// }

// console.log("max in subarray-->",max)


function maxSubarray(arr,k)
{
    let windowSum=0;
    let maxSum=-Infinity;

    for(let i=0;i<k;i++)
    {
      windowSum=windowSum+arr[i];
    }
    maxSum=windowSum;
    for(let i=k;i<arr.length;i++)
    {
        windowSum=windowSum+arr[i]-arr[i-k];
        maxSum=Math.max(windowSum,maxSum)
    }
   return maxSum
}

console.log(maxSubarray([1,2,3,4,5],3))