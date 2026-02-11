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

function countTripelet(arr) {
  arr.sort((a, b) => a - b);
  let set = new Set(arr);
  let tripelet = new Set();
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const sum = arr[i] + arr[j]; // ensure c is distinct and greater than arr[j]
      if (set.has(sum) && sum > arr[j]) {
        // normalize triplet order
        const key = `${arr[i]},${arr[j]},${sum}`;
        tripelet.add(key);
      }
    }
  }

  return tripelet.size;
}
console.log(countTripelet(arr));
