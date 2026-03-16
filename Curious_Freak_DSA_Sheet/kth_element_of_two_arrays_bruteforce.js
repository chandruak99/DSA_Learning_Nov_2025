//bruteforce
const arr1=[2,3,6,7,9];
const arr2=[1,4,8,10];
const k=5;

// function kthPosition(arr1,arr2,k)
// {
// const combined=[...arr1,...arr2];

// combined.sort((a,b)=>a-b);


// return combined[k-1];
// }


// console.log("kthPosition==",kthPosition(arr1,arr2,k))


//two pointer technique


function kthPosition(arr1,arr2,k)
{
    // arr1.sort((a,b)=>a-b);
    // arr2.sort((a,b)=>a-b);
    let result=[];
    let left=0;
    let right=0;

    while(left<arr1.length && right<arr2.length)
    {
        if(arr1[left]<=arr2[right])
        {
            result.push(arr1[left]);
            left++;
        }
        else{
            result.push(arr2[right]);
            right++;
        }
    }

    while(left<arr1.length)
    {
        result.push(arr1[left]);
        left++;
    }

    while(right<arr2.length)
    {
       result.push(arr2[right]);
       right++;
    }

    return result[k-1]
}

console.log("kthPosition==",kthPosition(arr1,arr2,k))