// const arr=[1,2,3,1,4,5,2,3,6];
// const k=3;

// function maximumSubarray(arr,k)
// {
//     const result=[];
//     const dequeue=[];
//     for(let i=0;i<arr.length;i++)
//     {

//         console.log("dequeue==",dequeue)
//         if(dequeue.length>0 && dequeue[0]===i-k)
//         {
//             dequeue.shift();
//         }


//         if(dequeue.length > 0 &&arr[i]>= arr[dequeue[dequeue.length-1]] )
//         {
//             dequeue.pop();
//         }


//         dequeue.push(i);

//         if(i>=k-1)
//         {
//             result.push(arr[dequeue[dequeue.length-1]]);
//         }
//     }

//     return result;
// }


// console.log(maximumSubarray(arr,k))



 
function maxOfSubarrays(arr, k) {
    const n = arr.length;
    const result = [];
    const deque = []; // Stores indices

    for (let i = 0; i < n; i++) {
        // 1. Remove indices that are out of the current window
        if (deque.length > 0 && deque[0] === i - k) {
            
            console.log(deque[0],i,k)
            deque.shift();
        }

        // 2. Remove indices of elements smaller than the current element
        // They will never be the maximum again
        while (deque.length > 0 && arr[deque[deque.length - 1]] <= arr[i]) {
            deque.pop();
        }

        // 3. Add current element's index to the back
        deque.push(i);

        // 4. The front of the deque is the index of the maximum element
        // Start adding to results once the first window is complete
        if (i >= k - 1) {
            result.push(arr[deque[0]]);
        }
    }

    return result;
}

// Example usage:
const arr = [1, 2, 3, 1, 4, 5, 2, 3, 6];
const k = 3;
console.log(maxOfSubarrays(arr, k)); // [3, 3, 4, 5, 5, 5, 6]