const arr=[1,4,5,7,2];



let firstMax=-Infinity;
let secondMax=-Infinity;
for(let i=0;i<arr.length;i++)
{
    if(arr[i]>firstMax)
    {
        secondMax=firstMax;
        firstMax=arr[i];    
        
    }
}
// console.log("firstMax",firstMax);
console.log("secondMax",secondMax);