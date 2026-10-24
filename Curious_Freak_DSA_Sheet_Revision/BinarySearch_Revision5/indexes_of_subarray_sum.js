const arr = [1, 2, 3, 7, 5];
const target = 12;

// function indexesOfSubarray(arr, target) {
//   let low = 0;
//   let high = 1;

//   let sum = arr[0];
//   while (low < high && high < arr.length) {
//     console.log("arr[high]", arr[high]);
//     sum = sum + arr[high];
//     console.log("sum==", sum);

//     if (sum === target) {
//       return [low + 1, high + 1];
//     }

//     while (sum > target) {
//       //   console.log("sum inside ==", sum);
//       sum = sum - arr[low];
//       if (sum === target) {
//         return [low + 2, high + 1];
//       }
//       low++;
//     }
//     high++;
//   }
// }

// console.log(indexesOfSubarray(arr, target));

function indexesOfSubarray(arr, target) {
  let left = 0;
  let right = 0;
  let currentSum = 0;
  while (right < arr.length) {
    currentSum += arr[right];

    while (currentSum > target && left < right) {
      currentSum -= arr[left];
      left++;
    }

    if (currentSum === target) {
      return [left + 1, right + 1];
    }
    right++;
  }

  return [-1];
}

console.log(indexesOfSubarray(arr, target));
