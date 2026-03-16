const   arr=[2,3,2,3,5];

// function frequencyInLimitedArray(arr)
// {


//     let freq=[];
//     let n=arr.length;

//     for(let i=1;i<=n;i++)
//     {
//         let count=0;
//         // console.log(i)
//         for(let j=0;j<n;j++)
//         {
//             // console.log(arr[j])
//             if(arr[j]===i)
//             {
//                 console.log(arr[j])
//                 count++;
//             }
//         }

//         freq.push(count)
//     }
//     return freq;
// }

// console.log(frequencyInLimitedArray(arr))


function frequencyInLimitedArray(arr){

    let n=arr.length;

    let freq=new Map();
    for(let i=1;i<=n;i++)
    {
        freq.set(i,freq.get(i)||0);
    }


    for(let i=0;i<n;i++)
    {
        if(freq.has(arr[i]))
        {
            freq.set(arr[i],freq.get(arr[i])+1)
        }
    }

    return [...freq.values()]

}

console.log(frequencyInLimitedArray(arr))