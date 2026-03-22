const arr=[2,3,-8,7,-1,2,3];
// const arr=[-2, -4]
// const arr=[5, 4, 1, 7, 8]


// function maximumSumSubarray(arr)
// {

//     let max=-Infinity;
//     for(let i=0;i<arr.length;i++)
//     {

//         let temp=[];
//         let sum=arr[i];

//         if(sum>max)
//         {
//             max=sum;
//         }
    
//         for(let j=i+1;j<arr.length;j++)
//         {
//           sum=sum+arr[j];

//           if(sum>max)
//           {
            
//             max=sum;
//           }
//         }
       
        
//     }

//     return max;
// }

// console.log(maximumSumSubarray(arr));


// simple bruteforce
// function maximumSumSubarray(arr)
// {
//     let max=-Infinity;

//     let sum;
//     for(let i=0;i<arr.length;i++)
//     {
        
//         for(let j=i;j<arr.length;j++)
//         {
//             sum=0;
//             for(let k=i;k<=j;k++)
//             {

//                sum=sum+arr[k];
//                if(sum>max)
//                {
//                 max=sum;
//                }
//             }
//             // console.log("sum==",sum);
//             // console.log("max==",max)
//         }
//     }
//     return max;
// }

// console.log(maximumSumSubarray(arr));


//kadan's algorithm

//find the max sum subarray
// function maximumSumSubarray(arr)
// {

//     let ele;
//     let sum=0;
//     let max=-Infinity;
//     let startIndex;
//     let endIndex;
//      for(let i=0;i<arr.length;i++)
//      {
//         if(sum===0)
//         {
//             startIndex=i;
//         }
//         sum=sum+arr[i];


//         if(sum>max)
//         {
//             endIndex=i;
//             max=sum;
//         }
//         if(sum<0)
//         {
          
//            sum=0;
//         }
//      }

//      return arr.slice(startIndex,endIndex+1)
// }

// console.log(maximumSumSubarray(arr));

//find the max sum 

function maximumSumSubarray(arr)
{

    let sum=0;
    let max=-Infinity;
  
     for(let i=0;i<arr.length;i++)
     {
       
        sum=sum+arr[i];


        if(sum>max)
        {
            max=sum;
        }
        if(sum<0)
        {
          
           sum=0;
        }
     }

     return max
}

console.log(maximumSumSubarray(arr));
