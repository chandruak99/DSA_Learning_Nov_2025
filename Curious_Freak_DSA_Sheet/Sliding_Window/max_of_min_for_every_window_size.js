const arr=[10,20,30,50,10,70,30];


// function maxOfMin(arr)
// {

//     let n=arr.length;
//     // let k=1;
//     let maxArray=[];
    
//     for(let k=1;k<=n;k++)
//     {
//          let queue=[];
//          let minArray=[];
        
//         for(let i=0;i<arr.length;i++)
//         {

//             if(queue.length >0 && queue[0]===i-k)
//             {
//                 queue.shift();
//             }

//             while(queue.length >0 && arr[i]<=arr[queue[queue.length-1]])
//             {
//                 queue.pop();
//             }
//             queue.push(i);
//             // console.log("queue==",queue)

//             if(i>=k-1)
//             {
//                 minArray.push(arr[queue[0]]);
//             }
//             // console.log("result==",result)
//         }

//         let max=-Infinity;

//         for(let i=0;i<minArray.length;i++)
//         {
//              if(minArray[i]> max)
//              {
//                  max=minArray[i];
//              }
//         }
//         maxArray.push(max);

//     }

//     return maxArray;

// }
// console.log(maxOfMin(arr));


function maxOfMin(arr, n) {
    // Step 1: Initialize boundaries
    let left = new Array(n).fill(-1);
    let right = new Array(n).fill(n);
    let stack = [];

    // Find Next Smaller Element to the Left (NSL)
    for (let i = 0; i < n; i++) {

        // console.log("stack left==",stack)
        while (stack.length > 0 && arr[stack[stack.length - 1]] >= arr[i]) {
            stack.pop();
        }
        if (stack.length > 0) {
            left[i] = stack[stack.length - 1];
        }
        stack.push(i);
    }
    console.log("stack after left==",stack);

    console.log("left==",left)
    // Clear stack for the next pass
    stack = [];

    // Find Next Smaller Element to the Right (NSR)
    for (let i = n - 1; i >= 0; i--) {
        console.log("right stack===",stack)
        console.log("right==",right)
        while (stack.length > 0 && arr[stack[stack.length - 1]] >= arr[i]) {
            stack.pop();
        }
        if (stack.length > 0) {
            right[i] = stack[stack.length - 1];
        }
        stack.push(i);
    }

    console.log("right==",right)

    // Step 2: Initialize result array with 0s
    // ans[i] will store max of min for window size i
    let ans = new Array(n + 1).fill(0);
    console.log("before ans==",ans)

    // Fill answer array based on the "stretch" of each element
    for (let i = 0; i < n; i++) {
        let windowSize = right[i] - left[i] - 1;
        ans[windowSize] = Math.max(ans[windowSize], arr[i]);
    }
    console.log("after ans==",ans)
    // Step 3: Backward pass to fill the gaps
    // A max-min for window size 7 is also valid for window size 6, 5, etc.
    console.log("n==",n)
    for (let i = n - 1; i >= 1; i--) {
        ans[i] = Math.max(ans[i], ans[i + 1]);
    }

    // Return the result from size 1 to n (slice removes the 0th index)
    return ans.slice(1);
}

// Dry Run Input
const input = [10, 20, 30, 50, 10, 70, 30];
console.log(maxOfMin(input, input.length)); 
// Output: [70, 30, 20, 10, 10, 10, 10]