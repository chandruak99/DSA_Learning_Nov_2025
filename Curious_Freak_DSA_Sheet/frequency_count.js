const arr=[2,3,2,3,5];

function frequency(arr)
{
    let n=arr.length;
    let result=new Array(n).fill(0);
    // console.log("result==",result)


    for(let i=0;i<n;i++)
    {
        let val=arr[i];
        result[val-1]++;
    }

    console.log("result==",result)
}


frequency(arr)