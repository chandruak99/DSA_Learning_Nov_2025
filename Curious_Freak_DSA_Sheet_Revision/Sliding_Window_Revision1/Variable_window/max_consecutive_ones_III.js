
//sliding window approach
const arr=[1,1,1,0,0,0,1,1,1,1,0];

const k=2;



// function maxConsecutiveOnes(arr,k)
// {
//     let left=0;
//     let right=0;
//     let zeros=0;
//     let maxLength=0;

//     while(right<arr.length)
//     {
//         if(arr[right]===0)
//         {
//             zeros++;
//         }
//         while(zeros>k)
//         {
//             if(arr[left]===0)
//             {
//                 zeros--;
//             }
//             left++;
//         }
//         if(zeros<=k)
//         {
//             maxLength=Math.max(maxLength,right-left+1);
//         }
//         right++;
//     }

//     return maxLength;
// }

// console.log(maxConsecutiveOnes(arr,k))

//most optimized solution

function maxConsecutiveOnes(arr,k)
{
    let left=0;
    let right=0;
    let zeros=0;
    let maxLength=0;

    while(right<arr.length)
    {
        if(arr[right]===0)
        {
            zeros++;
        }
        if(zeros>k)
        {
            if(arr[left]===0)
            {
                zeros--;
            }
            left++;
        }
        if(zeros<=k)
        {
            maxLength=Math.max(maxLength,right-left+1);
        }
        right++;
    }

    return maxLength;
}

console.log(maxConsecutiveOnes(arr,k))


