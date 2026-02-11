//using Hashing


const arr=[0,-1,2,-3,1];


// function twoPairs(arr,target)
// {
// let map=new Map();
// for(let i=0;i<arr.length;i++)
// {
//     let complement=target-arr[i];
//     if(map.has(complement))
//     {
//        return [complement,arr[i]];
//     }
//     map.set(arr[i],i)
// }
// }

// console.log(twoPairs(arr,-2))

//Using Two pointers


function twoPairs(arr,target)
{
    arr.sort((a,b)=>a-b);
    let left=0;
    let right=arr.length-1;

    while(left<right)
    {
        let sum =arr[left]+ arr[right];
        if(sum===target)
        {
            return [arr[left],arr[right]];
        }
        else if(sum < target)
        {
            left++;
        }
        else{
            right--;
        }
    }

    return false;

}

console.log(twoPairs(arr,-2))

