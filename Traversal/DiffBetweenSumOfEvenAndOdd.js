// const arr=[1,2,3,4,5];
// let diff;
// let evenSum=0;
// let oddSum=0;
// for(let ele of arr)
// {
//     if(ele%2===0)
//     {
//         evenSum=evenSum+ele;
//     }
//     else
//     {
//         oddSum=oddSum+ele;
//     }
// }
// diff=evenSum-oddSum;
// console.log("diff",diff)

// console.log("evenSum==",evenSum);
// console.log("oddSum==",oddSum)


// const arr=[1,2,3,4,5];
// let evenSum=0;
// let oddSum=0;
// arr.forEach((ele)=>ele%2==0 ? evenSum=evenSum+ele :oddSum=oddSum+ele);

// console.log("Sum",evenSum,oddSum);


//using reduce method

const arr=[1,2,3,4,5];

const {evenSum,oddSum}=arr.reduce((acc,ele)=>
{
    if(ele%2===0)
    {
        acc.evenSum+=ele;
    }
    else{
        acc.oddSum+=ele;
    }

    return acc;
},{evenSum:0,oddSum:0});

console.log("evenSum==",evenSum);
console.log("oddSum==",oddSum)
