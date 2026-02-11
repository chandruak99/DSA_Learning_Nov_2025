const arr1=[1,2,5,4,0];
const arr2=[2,4,5,0,1];




function checkArrayEqual(arr1,arr2)
{
let map=new Map();

for(let i=0;i<arr1.length;i++)
{
    map.set(arr1[i],(map.get(arr1[i])|| 0)+1)
}


for(let i=0;i<arr2.length;i++)
{
    if(!map.has(arr2[i]) || (map.get(arr2[i])===0))
    {
        return false;
    }
    else
    {
        if(map.get(arr2[i])===1)
        {
            map.delete(arr2[i]);
        }
        else
        {
        map.set(arr2[i],map.get(arr2[i])-1);
        }
    }
}
  return map.size ===0;
}

console.log(checkArrayEqual(arr1,arr2))


