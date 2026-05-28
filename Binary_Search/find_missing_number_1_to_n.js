//missing and repeadting number 

// const nums=[3,5,4,1,1];


const nums=[3,0,1]
//both repeated and missing number
// function repeatingMissing(nums)
// {

//     let n=nums.length;
//     let sn=(n*(n+1))/2;
//     let s2n=(n*(n+1) * (2*n+1))/6;
//     let s=0;
//     let s2=0;

//     for(let i=0;i<n;i++)
//     {
//           s+=nums[i];
//           s2+=nums[i]* nums[i];
//     }

//     let val1=s-sn;
//     let val2=s2-s2n;
//     val2=val2/val1;
//     let x=(val1+val2)/2;
//     let y=x-val1;
//     return [x,y]
// }

// console.log(repeatingMissing(nums))



function missingNumber(nums)
{
     let n=nums.length;
     let s=0;
     let sn=(n*(n+1))/2;

     for(let i=0;i<n;i++)
     {
        s+=nums[i];
     }

     return sn-s;
}

console.log(missingNumber(nums))