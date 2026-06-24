const arr=[1,3,5,5,5,5,67,123,125];
const target=5;

// function firstAndLastOccurence(arr,target)
// {


//     function firstOccurence(arr,target)
//     {
//         let low=0;
//         let high=arr.length-1;
//         let ans=-1;

//         while(low<=high)
//         {
//             let mid = Math.floor((low + high) / 2);
//             if (arr[mid] === target) {
//                 ans = mid;
//                 high = mid - 1;
//             }
//             else if (target < arr[mid]) {
//                 high = mid - 1;
//             }
//             else {
//                 low = mid + 1;
//             }
//         }
//         return ans;
//     }

//     function lastOccurence(arr,target)
//     {
//         let low=0;
//         let high=arr.length-1;
//         let ans=-1;

//         while(low<=high)
//         {
//             let mid=Math.floor((low+high)/2);

//             if(arr[mid]===target)
//             {
//                 ans=mid;
//                 low=mid+1;
//             }
//             else if(target < arr[mid])
//             {
//                 high=mid-1;
//             }
//             else
//             {
//                 low=mid+1;
//             }
//         }

//         return ans;
//     }
//     // const first=firstOccurence(arr,target);
//     // const last=lastOccurence(arr,target);

//     return [firstOccurence(arr,target),lastOccurence(arr,target)]
// }
// console.log(firstAndLastOccurence(arr,target))



function firstAndLastOccurence(arr,target)
{
    function binarySearch(arr,target,first)
    {
        let low=0;
        let high=arr.length-1;
        let ans=-1;
        while(low<=high)
        {
             let mid=Math.floor((low+high)/2);

             if(arr[mid]===target)
             {
                ans=mid;
                if(first)
                {
                    high=mid-1;
                }
                else
                {
                    low=mid+1;
                }
             }
             else if(arr[mid]<target)
             {
                  low=mid+1;
             }
             else
             {
                high=mid-1;
             }
        }
        return ans;
    }
    let lb=binarySearch(arr,target,true)
    let ub=binarySearch(arr,target,false);

    if(lb===-1)
    {
        return [-1,-1];
    }

    return [lb,ub];

}

console.log(firstAndLastOccurence(arr,target));