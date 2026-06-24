const n=[3,0,1];


function missingNumber(arr)
{   
    let n=arr.length;
    let sn=(n*(n+1))/2;
    let sum=0;

    for(let i=0;i<arr.length;i++)
    {
        sum+=arr[i];
    }

    return sn-sum;
}

console.log(missingNumber(n))