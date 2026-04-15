const arr=[1,2,3,4,5];
const k=2;


function reverseArray(arr,start,end)
{
    
    while(start<end)
    {
        [arr[start],arr[end]]=[arr[end],arr[start]];
        start++;
        end--;
    }

    return arr;
}

function rotateBy1(arr,k)
{

    reverseArray(arr,0,arr.length-1);
    reverseArray(arr,k,arr.length-1);
    reverseArray(arr,0,k-1)
    console.log(arr);
}


rotateBy1(arr,k);

