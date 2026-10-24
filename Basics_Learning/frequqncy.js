// const arr=[1,2,1,3,4,5];


// const map=new Map();


// for(let i=0;i<arr.length;i++)
// {
//     map.set(arr[i],(map.get(arr[i])|| 0)+1);
// }

// console.log(map)

const arr=[1,2,1,3,4,5];


const arrFreq=new Array();

for(let i=0;i<arr.length;i++)
{
    arrFreq[arr[i]]=(arrFreq[arr[i]] || 0)+1;
}

console.log("arrFreq==",arrFreq)