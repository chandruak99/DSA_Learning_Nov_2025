// const arr=[-8,2,3,-6,10];
// const k=2;
const arr=[12, -1, -7, 8, -15, 30, 16, 28]
const  k = 3


function firstNegative(arr,k){

    let result=[];
    let queue=[];

    for(let i=0;i<k;i++)
    {
        if(arr[i]<0)
        {
            queue.push(arr[i]);
        }
    }

    result.push(queue.length>0? queue[0]:0);

    for(let i=k;i<arr.length;i++)
    {
       if(arr[i-k] <0)
       {
          queue.shift();
       }

       if(arr[i]<0)
       {
         queue.push(arr[i]);
       }

       result.push(queue.length>0 ? queue[0]:0)
    }

    return result;

}

console.log(firstNegative(arr,k));