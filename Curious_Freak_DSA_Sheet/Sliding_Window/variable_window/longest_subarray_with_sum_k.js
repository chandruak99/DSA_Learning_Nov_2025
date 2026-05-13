const arr=[10,5,2,7,1,-10];
const k=15;


// const arr=[-5, 8, -14, 2, 4, 12];
// const k=-5;
// const arr=[-5,8,-14,2,4,12];
// const k=-5;

// const arr=[10,-10,20,30];
// const k=5;

// const arr=[4,2,-3,1,6];
// const k=0;
// const arr=[4,2,0,1,6];
// const k=0;

// const arr=[10,-10,20,30];
// const k=5;

// function longestSubarray(arr,k)
// {
//     let maxlength=-Infinity;
//    for(let i=0;i<arr.length;i++)
//    {
//     let currentSum=0;
//     for(let j=i;j<arr.length;j++)
//     {
//        currentSum+=arr[j];

//        if(currentSum===k)
//        {
//           let length=j-i+1;
//           if(length>maxlength)
//           {
//              maxlength=length;
//           }
//        }
//     }
//    }

//    return maxlength ===-Infinity ? 0 :maxlength

// }



// function longestSubarray(arr,k)
// {
//    let n=arr.length;
//    let left=0;
//    let sum=0;
//    let maxLength=-Infinity;

//    for(let right=n-1;right>=0;right--)
//    {
//        sum+=arr[right];
//       //  console.log("sum==",sum)
//       //  console.log("left",left)

//        while(sum > k && left < right)
//        {
//           sum-=arr[left];
//           left++;
//        }

//        if(sum===k)
//        {
//          //   console.log("left==",left);
//          //   console.log("right==",right)
//           let length=right-left+2;
//           if(length > maxLength)
//           {
//                // console.log("length==",length)
//                maxLength=length;
//           }
          
//        }
//    }

//    return maxLength;
// }



function longestSubarray(arr,k)
{

   let prefix=new Map();
   let currentSum=0;
   let maxSum=-Infinity;
   for(let i=0;i<arr.length;i++)
   {
          currentSum+=arr[i];

          console.log("currentSum==",currentSum)

          if(currentSum===k)
          {
            maxSum=i+1;
          }
          
          let previous=currentSum-k;
          if(prefix.has(previous))
          {
             let length=i-prefix.get(previous);
             maxSum=Math.max(maxSum,length);
          }

          if(!prefix.has(currentSum))
          {
             prefix.set(currentSum,i);
          }

          console.log("prefix==",prefix)
   }

   return maxSum === -Infinity ?0 :maxSum;
}
console.log(longestSubarray(arr,k))


let maxLength=-Infinity;
         let prefix=new Map();
         let currentSum=0;
         for(let i=0;i<arr.length;i++)
         {
              currentSum+=arr[i];
              
              if(currentSum===k)
              {
                  maxLength=Math.max(maxLength,i+1);
              }
              
              let previous=currentSum-k;
              if(prefix.has(previous))
              {
                  maxLength=Math.max(maxLength,i-prefix.get(previous));
              }
              
              if(!prefix.has(previous))
              {
                  prefix.set(currentSum,i);
              }
         }
         
         
         return maxLength===-Infinity ? 0 : maxLength;