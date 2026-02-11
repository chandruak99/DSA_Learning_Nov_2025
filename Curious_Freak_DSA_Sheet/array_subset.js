const arr1=[11,7,1,13,21,3,7,3];
const arr2=[11,3,7,1,7,12];



function arraySubset(arr1,arr2)
{
const map=new Map();
for(let i=0;i<arr1.length;i++)
{
  map.set(arr1[i],(map.get(arr1[i]) ||0)+1);
}

console.log("mapA==",map);


for(let i=0;i<arr2.length;i++)
{
    if(!map.has(arr2[i]) || map.get(arr2[i])===0)
    {
        return false;
    }
    else
    {
        map.set(arr2[i],(map.get(arr2[i])-1))
    }
}

return true
}

console.log(arraySubset(arr1,arr2))