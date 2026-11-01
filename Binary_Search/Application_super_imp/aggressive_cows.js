let arr=[0,3,4,7,9,10];

let cows=4;


function canWePlace(arr,distance,cows)
{
    let cowCount=1;
    let last=arr[0];
    // console.log("distance==",distance)

    for(let i=1;i<arr.length;i++)
    {
        if(arr[i]-last >= distance)
        {
            // console.log("if check",arr[i]-last)
            cowCount++;
            last=arr[i];
        }
    }
    // console.log("cowsCount==",cowCount)
    if(cowCount>=cows)
    {
        return true;
    }
    else
    {
        return false;
        
    }
}

function aggressiveCows(arr,cows)
{
    arr.sort((a,b)=>a-b);

    let min=arr[0];
    let max=arr[arr.length-1];

    // console.log("max-min==",max-min)

    for(let i=1;i<=max-min;i++)
    {
        // console.log("i==",i)
        if(canWePlace(arr,i,cows)===true)
        {
            
            continue;
        }
        else
        {
            return i-1;
        }
    }
}


console.log(aggressiveCows(arr,cows))