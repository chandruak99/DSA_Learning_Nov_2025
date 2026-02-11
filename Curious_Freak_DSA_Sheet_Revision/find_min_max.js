//normal flow
// const arr=[1,2,3,4,5];

// let max=-Infinity;
// let min=Infinity;


// for(let i=0;i<arr.length;i++)
// {
//     if(arr[i]>max)
//     {
//         max=arr[i];
//     }

//     if(arr[i]< min)
//     {
//         min=arr[i];
//     }
// }

// console.log("max==",max)
// console.log("min==",min)


//using reduce
const arr=[5,4,3,2,1];

const max=arr.reduce((a,b)=>a > b ?a :b);
const min=arr.reduce((a,b)=>a < b ? a:b);


console.log("min==",min);
console.log("max==",max)