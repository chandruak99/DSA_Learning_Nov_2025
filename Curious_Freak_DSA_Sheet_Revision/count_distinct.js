
const arr=[1,2,2,2,3];
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
console.log(countDistinct(arr))