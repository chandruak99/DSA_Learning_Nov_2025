const arr=[10,5,2,7,1,-10];

const target=15;


function longest_Subarray(arr,target)
{
    let sum=0;
    let prefix=new Map();
    let maxLength=-Infinity;

    for(let i=0;i< arr.length;i++)
    {
        sum=sum+arr[i];

        if(sum===target)
        {
             maxLength=Math.max(maxLength,i+1);
        } 

        let previous=sum-target;

        if(prefix.has(previous))
        {
            maxLength=Math.max(maxLength,prefix.get(previous)-i);
        }

        if(!prefix.has(sum))
        {
            prefix.set(sum,i);
        }
    }

    return maxLength===-Infinity ? 0 :maxLength;
}

console.log(longest_Subarray(arr,target))