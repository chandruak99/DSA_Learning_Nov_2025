const arr=[1,2,3,4,5];
let sum =0;
let average;
for(let ele of arr)
{
    sum=sum+ele;
}
average=sum/arr.length;
console.log("average==",sum/arr.length)

let minimumClose;
let minimumCalc=Math.abs( arr[0]-average);
for(let ele of arr)
{
    let diff=Math.abs(ele-average)
    if(diff < minimumCalc)
    {
        minimumCalc=diff;
        minimumClose=ele
    }
}

console.log(minimumClose)


