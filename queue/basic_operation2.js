const arr=[5];

console.log("arr=",arr);

let n=arr.length;

arr.push(6);

for(let i=0;i<n;i++)
{
   arr.push(arr.shift());
}

console.log(arr);