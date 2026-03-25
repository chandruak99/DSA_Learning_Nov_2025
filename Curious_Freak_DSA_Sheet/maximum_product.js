const arr=[-2, 6, -3, -10, 0, 2];
// const arr=[-1, -3, -10, 0, 6]
// const arr=[2, 3, 4] 

// function maximumProduct(arr)
// {
//    let max=-Infinity; 
//    for(let i=0;i<arr.length;i++)
//    {
//     let prod=arr[i];
//     for(let j=i+1;j<arr.length;j++)
//     {
//          prod=prod* arr[j];

//          if(prod>max)
//          {
//             max=prod;
//          }
//     }

//    }
//    return max;
// }

// console.log(maximumProduct(arr))


//using kadan's algorithm
// function maximumProduct(arr)
// {
//   if (arr.length === 0) return 0;

//     let res = arr[0];
//     let curMax = arr[0];
//     let curMin = arr[0];

//     for (let i = 1; i < arr.length; i++) {
//         let num = arr[i];

//         // If we hit a negative number, the max becomes the min and vice versa
//         if (num < 0) {
//             [curMax, curMin] = [curMin, curMax];
//         }

//         // Standard Kadane-style choice: 
//         // Start fresh at the current number OR multiply with the previous streak
//         curMax = Math.max(num, curMax * num);
//         curMin = Math.min(num, curMin * num);
//         console.log("curMax=",curMax);
//         console.log("curMin",curMin)

//         // Update the overall global maximum
//         res = Math.max(res, curMax);
//     }

//     return res;
// }

// console.log(maximumProduct(arr))



//using prefix and suffix  approach


function maximumProduct(arr)
{
    let prefix=1;
    let suffix=1
    let max=-Infinity;
    let n=arr.length-1;

    for(let i=0;i<n;i++)
    {
        prefix=prefix*arr[i];
        suffix=suffix*arr[n-i-1];

        if(prefix===0)
        {
            prefix=1;
        }
        if(suffix===0)
        {
            suffix=1;
        }

        max=Math.max(max,Math.max(prefix,suffix));
       
    }
     return max;
}

 console.log(maximumProduct(arr))