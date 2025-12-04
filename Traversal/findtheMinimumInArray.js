const arr=[1,2,0,5,6,4];
let min=arr[0];

for(let ele of arr)
{
    if(ele<min)
    {
        min=ele;
    }
}
console.log("min==",min)