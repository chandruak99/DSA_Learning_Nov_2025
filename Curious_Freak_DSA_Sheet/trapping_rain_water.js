
// const arr=[3,0,2,0,4];

// function trappingRainWater(arr)
// {
//     let totalSum=0;

//     for(let i=1;i<arr.length-1;i++)
//     {
//         let leftMax=0;
//         let rightMax=0;

//         for(let j=0;j<=i;j++)
//         {
//             leftMax=Math.max(leftMax,arr[j]);
//         }

//         for(let j=i;j<arr.length;j++)
//         {
//             rightMax=Math.max(rightMax,arr[j]);
//         }


//         totalSum+=Math.min(leftMax,rightMax)-arr[i];
//     }

//     return totalSum;
// }

// console.log(trappingRainWater(arr))







function trapOptimized(arr) {
    let left = 0;
    let right = arr.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    let totalSum = 0;

    while (left < right) {
        console.log("left==", left);
        console.log("right=", right)
        if (arr[left] < arr[right]) {

            if (arr[left] >= leftMax) {
                leftMax = arr[left];
            }
            totalSum += leftMax - arr[left];
            console.log("totalSumLeft", leftMax - arr[left])
            left++;

        }
        else {
            if (arr[right] >= rightMax) {
                rightMax = arr[right];
            }
            totalSum = rightMax - arr[right];
            console.log("totalSumRight", rightMax - arr[right])
            right--;
        }
    }
    return totalSum;
}



// Example usage:
console.log(trapOptimized([3, 0, 1, 0, 4, 0, 2])); // Output: 10