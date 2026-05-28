// const arr=[1,3,5,5,5,5,67,123,125];
// const x=5;

// const arr=[1, 3, 5, 5, 5, 5, 7, 123, 125];
// const x=7;

const arr=[7,7,9,10,10];
const x=6;

// const arr=[5,7,7,7,8,8,8];
// const x=8;

// const arr=[1,2,3];
// const x=4;
//bruteForce
// function firstAndLastSorted(arr,x)
// {
//     let first=-1;
//     let last=-1;

//     for(let i=0;i<arr.length;i++)
//     {
//         if(arr[i]===x && first===-1 )
//         {
//             first=i;
//             last=i
//         }
//         else if(arr[i]===x && first!==-1)
//         {
//             last=i;
//         }
//     }

//     return [first,last];
   
// }

// console.log(firstAndLastSorted(arr,x))


function lowerBound(arr,x)
{
   let left=0;
   let right=arr.length-1;
   let ans=-1;

   while(left<=right)
   {
     let mid=Math.floor((left+right)/2);
     if(arr[mid]>=x)
     {
          ans=mid;
          right=mid-1;
     }
     else {
        left=mid+1;
     }
   }

   return ans;
}

function upperBound(arr,x)
{
   let left=0;
   let right=arr.length-1;
   let ans=arr.length;

   while(left<=right)
   {
       let mid=Math.floor((left+right)/2);
       if(arr[mid]>x)
       {
        
         ans=mid;
         right=mid-1;
       }
       else
       {
          left=mid+1;
       }
   }

   console.log("upperBound==",ans)

   return ans;
}


function firstAndLastSorted(arr,x)
{

    let lb=lowerBound(arr,x);
    console.log("lb==",lb)
   //  if(lb===arr.length || arr[lb]!==x)
   //  {
   //      return [-1,-1];
   //  }
    return [lb,upperBound(arr,x)-1]
    
}

console.log(firstAndLastSorted(arr,x))