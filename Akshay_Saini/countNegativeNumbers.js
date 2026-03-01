const arr=[-5,2,-3,4];

// function countNegatives(arr) {
//   // implement your solution here
//   if (!Array.isArray(arr)) {
//     return false;
//   }


//   let count = 0;
//   for (let i = 0; i < arr.length; i++){


//     if ((typeof arr[i] === 'number') && Number.isFinite(arr[i]) ) {
//       if (arr[i] < 0) {
//         count++;
//       }
//     }
//     else
//     {
//       return false;
//     }
   
//   }
//   return count;
// }

// console.log(countNegativeNumbers(arr))

// using filter
// function countNegatives(arr){
   
//     if(!Array.isArray(arr)) return false;
//     if(!arr.every((ele)=> typeof ele ==='number' && Number.isFinite(ele)))
//     {
//        return false;
//     }
//     return arr.filter((x)=>x<0).length;

// }

// console.log(countNegatives(arr));

//using reduce

function countNegatives(arr)
{
    if(!Array.isArray(arr)) return false;
    if(!arr.every((ele)=> typeof ele ==='number' && Number.isFinite(ele)))
    {
       return false;
    }  
    return arr.reduce((count,ele)=>{
        if(ele <0)
        {
            count++;
        }
        return count;
    },0)
}

console.log(countNegatives(arr));