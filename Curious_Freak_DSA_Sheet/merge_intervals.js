// const arr=[[1,3],[2,6],[8,10],[15,18]];
const arr=[[4,7],[1,4]]


function mergeIntervals(arr)
{
    arr.sort((a,b)=>a[0]-b[0]);

    const merged=[arr[0]];

    // console.log("merged==",merged)

    for(let i=1;i<arr.length;i++)
    {
        let current =arr[i];
        let  previous=merged[merged.length-1]
        console.log("previous==",previous)

        if(current[0]<=previous[1])
        {
            previous[1]=Math.max(previous[1],current[1]);
            console.log("previous==",previous)
        }
        else
        {
            merged.push(current)
        }
    }

    return merged
}

console.log(mergeIntervals(arr))