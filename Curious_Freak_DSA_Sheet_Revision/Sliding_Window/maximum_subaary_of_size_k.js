// const arr=[100,200,300,400];
// const k=2;
const arr=[1, 4, 2, 10, 23, 3, 1, 0, 20]
const  k = 4

function maximumSubarray(arr,k)
{
    let max=-Infinity;
    let sum=0

    for(let i=0;i<k;i++)
    {
        sum=sum+arr[i];
    }

    if(sum>max)
    {
       max=sum;
    }

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

console.log(maximumSubarray(arr,k))