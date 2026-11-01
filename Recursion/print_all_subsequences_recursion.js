

function printAll(index,arr,ds)
{
    if(index>=n)
    {
        console.log(ds);
        return;
    }

    ds.push(arr[index]);
    printAll(index+1,arr,ds);
    ds.pop(arr[index]);
    printAll(index+1,arr,ds);
}


let arr=[3,1,2];




let ds=[];
let n=arr.length;
printAll(0,arr,ds);