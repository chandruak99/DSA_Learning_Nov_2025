const arr=[1,2,1,3,4,2,3];
const k=4;



function countDistinctfromSubarray(arr,k)
{
    const q=[];
    const result=[];
    for(let i=0;i<arr.length;i++)
    {
        q.push(arr[i]);

        if(q.length >k)
        {
            q.shift();
        }
        if(q.length ===k)
        {
            // console.log(q)
            let count=countDistinct(q);
            result.push(count);
        }
    }

    function countDistinct(newArr)
    {
        let map=new Map();
        // let count=0;

        for(let i=0;i<newArr.length;i++)
        {
            if(map.has(newArr[i]))
            {
                map.set(newArr[i],map.get(newArr[i]) + 1);
            }
            else
            {
            map.set(newArr[i],map.get(newArr[i])||1)
            }
        }

        return map.size;
    }
    return result;
}

console.log(countDistinctfromSubarray(arr,k))

