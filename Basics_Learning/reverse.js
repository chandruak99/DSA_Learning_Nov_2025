// const arr=[1,2,3,4,5];
// const n=arr.length;
// console.log("n==",n)
// for(let i=0;i<Math.floor(n/2);i++)
// {
//     [arr[i],arr[n-i-1]]=[arr[n- i-1],arr[i]];
// }

// console.log("arr=",arr)

const arr=[1,2,3,4,5];

let left=0;
let right=arr.length-1;

while(left<right)
{
    [arr[left],arr[right]]=[arr[right],arr[left]];
    left++;
    right--;
}

console.log(arr);