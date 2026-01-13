const arr=[5,3,9,1,7];

function quickSort(arr,low=0,high=arr.length-1)
{
    if(low<high)
    {
        let pi=partition(arr,low,high);
        quickSort(arr,low,pi-1);
        quickSort(arr,pi+1,high);
        
    }
    return arr;
}

function partition(arr,low,high)
{
    let i=low-1;
    let pivot=arr[high];

    for(let j=low;j<high;j++)
    {
        if(arr[j]<pivot)
        {
          i++;
          [arr[i],arr[j]]=[arr[j],arr[i]];
        }
    }

    [arr[i+1],arr[high]]=[arr[high],arr[i+1]];

    return i+1;
}

console.log(quickSort(arr))