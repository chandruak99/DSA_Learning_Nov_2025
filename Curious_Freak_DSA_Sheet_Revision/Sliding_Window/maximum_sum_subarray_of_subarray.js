const arr=[100,200,300,400];
let k=1;

//bruteforce
// const arr=[1,4,2,10,23,3,1,0,20];
// const k=4;
// let max=0;


// for(let i=0;i<=arr.length-k;i++)
// {
//     let tempmax=0;
//     let j=k+i;
//     let z=i;
//     while(z<j && z<arr.length)
//     {
//         tempmax=tempmax+arr[z];
//         z++;
//     }
//     console.log("tempMax=",tempmax)
//     if(tempmax>max)
//     {
//         max=tempmax
//     }
    
// }

// console.log("max==",max)


//using sliding window
// the most optimized solution

// let currentMax=0;

// for(let i=0;i<k;i++)
// {
//     currentMax=currentMax+arr[i];
// }
// let max=currentMax;

// for(let i=k;i<arr.length;i++)
// {
//     currentMax=currentMax+arr[i]-arr[i-k];

//     max=Math.max(max,currentMax)
// }

// console.log("max==",max)

//using queue

const q=[];
let maxSum=0;
let sum=0;


for(let i=0;i<arr.length;i++)
{
    sum=sum+arr[i];
    q.push(arr[i]);

    if(q.length > k)
    {
        sum=sum-q.shift();
    }

    if(q.length===k)
    {
        maxSum=Math.max(sum,maxSum);
    }
}

console.log("maxSum",maxSum)



