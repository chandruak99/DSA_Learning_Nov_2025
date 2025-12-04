const arr=[1,2,3,4,5];
let sum=0;
let avg;
for(let ele of arr)
{
    sum=sum+ele;
}
avg=sum/arr.length;
console.log("avg==",avg)
