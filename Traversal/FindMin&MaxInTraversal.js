const arr=[7,9,1,2,3,4,5];
let max=arr[0];
let min=arr[0];
for(let ele of arr)
{
    if(ele <min)
    {
        min=ele;
    }
    if(ele > max)
    {
        max=ele;
    }
}

console.log("max==",max);
console.log("min==",min)