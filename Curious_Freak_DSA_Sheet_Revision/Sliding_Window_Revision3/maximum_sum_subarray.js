const arr=[100,200,300,400];
const k=2;

function maximumSumSubarray(arr,k)
{

    let max=-Infinity;
    let sum=0;
    for(let i=0;i<k;i++)
    {
         sum+=arr[i];
    }

    max=Math.max(max,sum);


    for(let i=k;i<arr.length;i++)
    {
        sum-=arr[i-k];

        sum+=arr[i];

        max=Math.max(max,sum);

    }

    return max;
}
console.log(maximumSumSubarray(arr,k));