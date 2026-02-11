
//bruteforce using what i know 
// const arr=[1,2,3,4,5];

// const last=arr[arr.length-1];
// console.log(last)
// arr.pop()
// arr.splice(0,0,last);
// console.log(arr)



//bruteforce
const arr=[1,2,3,4,5];
const last=arr[arr.length-1]
for(let j=arr.length-2;j>=0;j--)
{
  arr[j+1]=arr[j]
}
arr[0]=last;
console.log(arr)