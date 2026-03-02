// const arr=[2,2,2,2,2];

// const map=new Map();

// for(let ele of arr)
// {
//     if(!map.has(ele)){
//         map.set(ele,ele);
//     }
// }

// console.log(Array.from(map.keys()))


const arr=[2,2,2,2,2];

// function removeDuplicates(arr)
// {
// if(arr.length ===0) return [];
// let result=[];
// result.push(arr[0]);

// for(let i=1;i<arr.length;i++)
// {
//     if(arr[i]!==arr[i-1]){
//         result.push(arr[i]);
//     }
// }

// return result;
// }


function removeDuplicates(arr)
{
   if(arr.length===0) return [];
   let i=0;
   for(let j=1;j<arr.length;j++)
   {
     if(arr[i]!==arr[j])
     {
        i++;
        arr[i]=arr[j];
     }


   }

   return arr.slice(0,i+1)
}
console.log(removeDuplicates(arr))