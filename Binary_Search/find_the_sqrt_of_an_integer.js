const n=28;


// naive or bruteForce Solution 
// function sqrtOfInteger(n)
// {
//     let ans;

//     for(let i=1;i<=n;i++)
//     {
//          if(i*i<=n)
//          {
//             ans=i;
//          }
//     }

//     return ans;
// }

// console.log(sqrtOfInteger(n))

//binary search approach

function sqrtOfInteger(n)
{
    let low=0;
    let high=n;
    let ans=-1;

    while(low<=high)
    {
        let mid=Math.floor((low+high)/2);
        if(mid*mid<=n)
        {
           ans=Math.max(ans,mid)
           low=mid+1;
        }
        else{
            high=mid-1;
        }
    }

    return ans;
}

console.log(sqrtOfInteger(n))

