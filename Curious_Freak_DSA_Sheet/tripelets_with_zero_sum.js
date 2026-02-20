// const arr=[1,5,3,2];
// const arr=[2,3,4]
// function countTripelet()
// {
//     arr.sort((a,b)=>a-b)
//     let count=0;
//     for(let i=0;i<arr.length-2;i++)
//     {

//         let left=i+1;
//         let right=arr.length-1;

//         while(left<right)
//         {
//             // console.log("arr[i]",arr[i]);
//             // console.log("arr[left]",arr[left])
//             let sum=arr[i]+arr[left];
//             // console.log("sum==",sum)
//             if(sum===arr[right])
//             {
//                 count++;
//                 left++;
//                 right--;
//             }
//             else if(sum<arr[right])
//             {
//                 right--;
//             }
//             else
//             {
//                 left++;
//             }
//         }
//     }
//     return count;
// }

// console.log(countTripelet(arr))

const arr = [1, 5, 3, 2];

// function countTripelet(arr) {
//   arr.sort((a, b) => a - b); 
//   let set = new Set(arr);
//    let triplet = new Set(); 
//    for (let i = 0; i < arr.length; i++) 
//     { 
//       for (let j = i + 1; j < arr.length; j++) 
//         { 
//           const sum = arr[i] + arr[j]; 
//           if (set.has(sum)) 
//           { 
//             // normalize triplet order 
//             const key = `${arr[i]},${arr[j]},${sum}`; 
//             triplet.add(key); 
//           } 
//         } 
//     } 
//         return triplet.size
// }


function countTripelet(arr)
{
  arr.sort((a,b)=>a-b)
  let n=arr.length;

  let count=0;

  for(let k=n-1;k>=0;k--)
  {
    let c=arr[k];
    // console.log("c==",c)
    let i=0;
    let j=k-1;

    while(i<j)
    {
      if((arr[i]+arr[j])===c){
        count++;
        i++;
        j--;
      }
      else if((arr[i]+arr[j])<c)
      {
        i++;
      }
      else
      {
        j--;
      }
    }
  }
  return count;
}
console.log(countTripelet(arr));
