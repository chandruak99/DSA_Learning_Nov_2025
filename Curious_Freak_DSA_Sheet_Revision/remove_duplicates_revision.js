//Removing duplicate elements using set
// Time - O(n);
// Space - O(n);
// const arr=[2,2,2,2,2];

// const set=[...new Set([...arr])];
// console.log("Unique array",set)


//Removing Duplicate using map
// Time Complexity O(n)
// Space Complexity O(n)
// const arr=[2,2,2,2,2];

// const map=new Map();

// for(let i=0;i<arr.length;i++)
// {
//     if(!map.has(arr[i]))
//     {
//         map.set(arr[i],i);
//     }
// }

// console.log(Array.from(map.keys()))


//Using comparision method

const arr=[2,2,2,2,2];
let j=0;
for(let i=1;i<arr.length;i++)
{
    if(arr[i]!==arr[i-1])
    {
        // console.log("Not equal")
        j++;
        arr[j]=arr[i]
    }
}
// console.log(j)

console.log(arr.slice(0,j+1))