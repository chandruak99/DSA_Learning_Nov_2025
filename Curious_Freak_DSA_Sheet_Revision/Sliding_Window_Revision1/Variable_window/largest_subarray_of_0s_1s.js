const arr=[1,0,1,1,1,0,0];
// const arr=[0,0,1,1,0];

// const arr=[0];

function largestSubarray(arr)
{
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]===0)
        {
            arr[i]=-1;
        }
    }

    let prefix=new Map();
    let currentSum=0;
    let maxLength=-Infinity;
    
    for(let i=0;i<arr.length;i++)
    {
        currentSum+=arr[i];

        if(currentSum===0)
        {
           maxLength=i+1;
        }

        let previous=currentSum-0;
        if(prefix.has(previous))
        {
            let length=i-prefix.get(previous);
            maxLength=Math.max(maxLength,length);
        }

        if(!prefix.has(currentSum))
        {
            prefix.set(currentSum,i);
        }

        console.log("maxLength==",maxLength)
    }

    return maxLength===-Infinity ?0 :maxLength;
}


console.log(largestSubarray(arr));