// const arr=[2,4,1,3,5];
// const arr=[2,3,4,5,6];
// const arr=[10,10,10]
const arr=[1,3,9,2,5];

function countInversions(arr)
{
    let count=0;
    for(let i=0;i<arr.length;i++)
    {
    
        for(let j=i+1;j<arr.length;j++)
        {
            if(i<j)
            {
               if(arr[i]>arr[j])
               {
                 count++;
               }
            }
        }
    }

    return count;
}

console.log(countInversions(arr));