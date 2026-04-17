const arr=[100,200,300,400];

const k=2;

function maxSumSubarray(arr,k)
{
    let max=0;
    let sum=0;
    for(let i=0;i<k;i++)
    {
         sum=sum+arr[i];
    }

    max=sum;
    

    for(let i=k;i<arr.length;i++)
    {
        
        sum=sum+arr[i]-arr[i-k];

        if(sum>max)
        {
            max=sum;
        }
    }

    return max;
}

console.log(maxSumSubarray(arr,k))