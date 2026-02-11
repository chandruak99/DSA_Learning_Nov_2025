
//brute force
const arr=[1, 4, 45, 6, 10, 8];

// function threePair(arr,target)
// {
//    for(let i=0;i<arr.length;i++)
//    {
//     for(let j=i+1;j<arr.length;j++)
//     {
//         for(let k=j+1;k<arr.length;k++)
//         {
//             let sum=arr[i]+arr[j]+arr[k];

//             if(sum === target)
//             {
//                 return [arr[i],arr[j],arr[k]];
//             }
//         }
//     }
//    }

//    return -1;
// }




function threePair(arr,target)
{
    arr.sort((a,b)=>a-b);
    for(let i=0;i<arr.length-2;i++)
    {
        let low=i+1;
        let high=arr.length-1;
        while(low<high)
        {
            let sum=arr[i]+arr[low]+arr[high];
            if(sum === target)
            {
                return [arr[i],arr[low],arr[high]];
            }
            else if(sum < target)
            {
                low++;
            }
            else 
            {
                high--;
            }
        }
    }

    return -1;
}


console.log(threePair(arr,13))