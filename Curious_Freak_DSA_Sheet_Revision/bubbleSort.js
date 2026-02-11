const arr=[0,1,2,0,1,2];

function bubbleSort(arr1)
{
    for(let i=0;i<arr1.length;i++)
    {
        for(let j=i+1;j<arr1.length;j++)
        {
            if(arr1[i]>arr1[j])
            {
                [arr1[i],arr1[j]]=[arr1[j],arr1[i]];
            }
        }
    }
    return arr1;
}

console.log(bubbleSort(arr))