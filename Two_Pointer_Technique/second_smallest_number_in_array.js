const arr=[5,6,3,4,2];

let firstMin=Infinity;
let secondMin=Infinity;

for(let i=0;i<arr.length;i++)
{
    if(arr[i]<firstMin)
    {
        secondMin=firstMin;
        firstMin=arr[i];
    }
}
console.log("secondMin==",secondMin)