// const arr=[3,0,1,0,4,0,2];
// const arr=[1, 2, 3, 4]
//bruteForce
const arr=[2, 1, 5, 3, 1, 0, 4]

// function trappingWater(arr)
// {
//     let sum=0;
//     for(let i=0;i<arr.length;i++)
//     {
//         let leftMax=0;
//         let rightMax=0;
//         for(let j=0;j<=i;j++)
//         {
//             leftMax=Math.max(leftMax,arr[j]);
//         }

//         for(let k=i;k<arr.length;k++)
//         {
//             rightMax=Math.max(rightMax,arr[k]);
//         }
//         // console.log("leftMax==",leftMax);
//         // console.log("rightMax",rightMax)
//         let min=Math.min(leftMax,rightMax);
//         // console.log("min",min)
//         sum=sum+(min-arr[i]);
//     }

//     return sum;
// }

// console.log(trappingWater(arr));


//Using Two pointer 

function trappingWater(arr)
{
    let left=0;
    let right=arr.length-1;
    let leftMax=0;
    let rightMax=0;
    let totalSum=0;
    while(left <right)
    {
        if(arr[left]<=arr[right])
        {
              if( arr[left]>=leftMax)
              {
                leftMax=Math.max(leftMax,arr[left]);
              }
              totalSum=totalSum+(leftMax-arr[left]);
              left++;

        }
        else
        {
            if(arr[right]>=rightMax)
            {
             rightMax=Math.max(rightMax,arr[right]);
            }

            totalSum=totalSum+(rightMax-arr[right]);
            right--;
        }

        // console.log("totalSum==",totalSum)
    }

    return totalSum;
}

console.log(trappingWater(arr))