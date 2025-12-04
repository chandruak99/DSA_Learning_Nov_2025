// const arr=[1,2,3,4,5];
// let sum=0;
// for(let ele of arr)
// {
//     if(ele %2===0)
//     {
//         sum=sum+ele;
//     }

// }
// console.log("sum==",sum)

//forEach method
// const arr=[1,2,3,4,5]
// let sum=0;
// arr.forEach((ele)=>
// {
//     if(ele %2===0) sum=sum+ele
// })
// console.log("sum==",sum)

//reduce Method
const arr=[1,2,3,4,5];
const sum=arr.reduce((acc,ele)=>ele%2==0 ? acc+ele :acc,0);
console.log("sum==",sum)