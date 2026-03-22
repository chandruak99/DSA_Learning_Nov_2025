// const arr=[10,5,2,7,1,-10];
// const k=15;
const arr=[-5, 8, -14, 2, 4, 12];
const k = -5

// const a

// const arr=[10,-10,20,30];
// const k=5;
// function longestSubstring(arr,k){

//      let max=0;
//         for(let i=0;i<arr.length;i++)
//         {
//             let sum=arr[i];
//             for(let j=i+1;j<arr.length;j++)
//             {
//                 sum=sum+arr[j];
//                 if(sum===k)
//                 {
//                     max=Math.max(j+i+1,max);
//                 }
//             }
//         }
        
        
//         return max;

// }

//using HashMap

function longestSubstring(arr,k){
    let currentSum=0;
    let maxLen=0;
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
            Math.max(length,maxLen);
        }


        if(!map.has(currentSum))
        {
            map.set(currentSum,i)
        }
    }
    return maxLen
}

console.log(longestSubstring(arr,k))