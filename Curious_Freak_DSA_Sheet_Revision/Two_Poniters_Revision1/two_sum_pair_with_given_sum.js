// const arr=[0,-1,2,-3,1];
// const target=-2;

const arr=[1,-2,1,0,5];
const target=0;

//bruteforce
// function twoSumPair(arr,target)
// {
//    for(let i=0;i<arr.length;i++)
//    {
//         for(let j=i+1;j<arr.length;j++)
//         {
//             let sum=arr[i]+arr[j];
//             // console.log("sum==",sum)
//             if(sum===target)
//             {
//                 return true;
//             }
//         }
//    }

//    return false;
// }

// console.log(twoSumPair(arr,target))

//optimized two pointer technique
function twoSumPair(arr,target)
{
    arr.sort((a,b)=>a-b);
    let left=0;
    let right=arr.length-1;

    while(left<right)
    {
        let sum=arr[left]+arr[right];
        // console.log("sum==",sum)

        if(sum===target)
        {
              return true
        }
        else if(sum>target)
        {

            right--;
        }
        else
        {
            left++;
        }
    }

    return false;
}
console.log(twoSumPair(arr,target));


