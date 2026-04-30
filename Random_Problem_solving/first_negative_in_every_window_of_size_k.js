// const arr=[-8,2,3,-6,10];
// const k=2;

// const arr=[12, -1, -7, 8, -15, 30, 16, 28];
// const k=3;

const arr=[12,1,3,5];
const k=3;



function firstNegative(arr,k)
{
    let queue=[];
    let result=[];

    for(let i=0;i<k;i++)
    {
        if(arr[i]<0)
        {
            queue.push(arr[i]);
        }
    }

    result.push(queue[0]?queue[0]:0);

    for(let i=k;i<arr.length;i++)
    {
        if(queue.length >0 && queue[0]===arr[i-k])
        {
            queue.shift();
        }
        if(arr[i]<0)
        {
            queue.push(arr[i]);
        }
        if(i>k-1)
        {
             result.push(queue[0]? queue[0]:0);
        }
    }

    return result;
}

console.log(firstNegative(arr,k));