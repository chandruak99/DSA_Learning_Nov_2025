// const n=11;
const n=4

//bruteForce Approach
// function findSqrt(n)
// {
//      for(let i=1;i<=n;i++)
//      {
//         if(i*i<=n)
//         {
//             ans=i;
//         }
//      }
//      return ans;
// }

// console.log(findSqrt(n));


//using BinarySearch Approach


function findSqrt(n)
{
    let left=0;
    let right=n;
    let ans=-1;

    while(left<=right)
    {
        let mid=Math.floor((left+right)/2);
        if(mid*mid<=n)
        {
            ans=mid;
            left=mid+1
        }
        else{
            right=mid-1;
        }
    }


    return ans;
 
}

console.log(findSqrt(n));