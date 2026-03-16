const arr=[10,5,2,7,1,-10];
const k=15;
//bruteForce technique
// function longestSubarrayWithSumK(arr,k){
    
//    let maxLen=0;
//    for(let i=0;i<arr.length;i++)
//    {
//     let currentSum=0;
//     for(let j=i;j<arr.length;j++)
//     {
//         currentSum+=arr[j];

//         if(currentSum===k)
//         {
//             // console.log("currentSum",currentSum)
//             console.log(j-i+1)
//             maxLen=Math.max(maxLen,j-i+1);
//         }
//     }
//    }

//    return maxLen;
// }


//optimized using Map


function longestSubarrayWithSumK(arr,k){
   
    let maxLen=0;
    let currentSum=0;

    let map=new Map();

    for(let i=0;i<arr.length;i++)
    {
        currentSum+=arr[i];
        if(currentSum===k)
        {
            maxLen=i+1;
        }

        let remaining=currentSum-k;
        if(map.has(remaining))
        {
            let length=i-map.get(remaining);
            maxLen=Math.max(maxLen,length)
        }


        if(!map.has(currentSum))
        {
            map.set(currentSum,i)
        }
    }

    return maxLen
}

console.log(longestSubarrayWithSumK(arr,k));