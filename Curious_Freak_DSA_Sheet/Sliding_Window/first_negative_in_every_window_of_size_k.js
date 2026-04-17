const arr=[-8,2,3,-6,10];

const k=2;

// const arr=[12,-1,-7,8,-15,30,16,28];
// const k=3;


// function findFirstNegative(tempArr)
// {
//     // let negativeCheckFlag=false
//     for(let i=0;i<tempArr.length;i++)
//     {
//          if(tempArr[i]<0)
//          {
//             // negativeCheckFlag=true;
//             return tempArr[i];
            
//          }
//     }

    
//        return 0;

// }
// function firstNegative(arr,k)
// {

//     let result=[];
    
//     let q=[];

//     for(let i=0;i<arr.length;i++)
//     {
//         q.push(arr[i]);
//         if(q.length>k)
//         {
//           q.shift();
//         }
//         if(q.length===k)
//         {
//            let firstNegativeNumber=findFirstNegative(q);
//            result.push(firstNegativeNumber);
//         }
//     }

//     return result;
// }


// console.log(firstNegative(arr,k))



// function firstNegative(arr,k)
// {
//    let q=[];

//    let result=[];
//    let head=0;

//    for(let i=0;i<k;i++)
//    {
//      if(arr[i]<0)
//      {
//         q.push(i);
//      }
//    }



//    if(q.length>head)
//    {
//       result.push(arr[q[head]])
//    }
//    else
//    {
//       result.push(0);
//    }

//    for(let i=k;i<arr.length;i++)
//    {
     
//       if(q.length >head && q[head]===i-k)
//       {
//          head++;
//       }
           
//       if(arr[i]<0)
//       {
//          q.push(i);
//       }

      
    
//    }
// }


// firstNegative(arr,k)


// function firstNegativeInWindow(arr, k) {
//     const n = arr.length;
//     const result = [];
//     const queue = []; // Stores indices of negative numbers
//     let head = 0;     // Pointer for the front of the queue

//     // 1. Process the first window
//     for (let i = 0; i < k; i++) {
//         if (arr[i] < 0) {
//             queue.push(i);
//         }
//     }

//     // Capture result for the first window
//     if (queue.length > head) {
//         result.push(arr[queue[head]]);
//     } else {
//         result.push(0);
//     }

//     // 2. Slide the window
//     for (let i = k; i < n; i++) {
//         // Remove index if it's outside the current window
//         if (queue.length > head && queue[head] <= i - k) {
//             head++;
//         }

//         // Add current index if element is negative
//         if (arr[i] < 0) {
//             queue.push(i);
//         }

//         // Capture result for the current window

//         console.log("queue length==",queue.length);
//         console.log("head==",head)
//         if (queue.length > head) {
//             result.push(arr[queue[head]]);
//         } else {
//             result.push(0);
//         }
//     }

//     return result;
// }

// // Example Walkthrough
// // const arr = [12, -1, -7, 8, -15, 30, 16, 28];
// // const k = 3;
// console.log(firstNegativeInWindow(arr, k));


//shift approach



function firstNegative(arr,k)
{
   let result=[];
   let queue=[];

   for(let i=0;i<k;i++)
   {
      if(arr[i]<0)
      {
         queue.push(arr[i]);
      }
   }

   result.push(queue.length >0 ? queue[0]:0);

   for(let i=k;i<arr.length;i++)
   {
      if(arr[i-k]<0)
      {
         queue.shift();
      }

      if(arr[i]<0)
      {
         queue.push(arr[i]);
      }

      result.push(queue.length >0 ? queue[0]:0)
   }
   return result;
}

console.log(firstNegative(arr,k));
