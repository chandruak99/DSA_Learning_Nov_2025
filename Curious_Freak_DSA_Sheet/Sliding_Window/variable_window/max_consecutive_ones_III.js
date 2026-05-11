const nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0];
const k = 2;

// optimized approach using sliding window
// function maxConsecutiveOnes(nums, k) {
//   let zeros = 0;
//   let left = 0;
//   let right = 0;
//   let maxLength = -Infinity;
//   while (right < nums.length) {
//     if (nums[right] === 0) {
//       zeros++;
//     }

//     while (zeros > k) {
//       if (nums[left] === 0) {
//         zeros--;
//       }
//       left++;
//     }

//     if (zeros <= k) {
//       maxLength = Math.max(maxLength, right - left + 1);
//     }

//     right++;
//   }

//   return maxLength;
// }

// console.log(maxConsecutiveOnes(nums, k));

//sliding window optimized approach

function maxConsecutiveOnes(nums, k) {
  let left = 0;
  let right = 0;
  let maxLength = 0;
  let zeros = 0;

  while (right < nums.length) {
    if (nums[right] === 0) {
      zeros++;
    }

    if (zeros > k) {
      if (nums[left] === 0) {
        zeros--;
      }
      left++;
    }
    if (zeros <= k) {
      maxLength = Math.max(maxLength, right - left + 1);
    }
    right++;
  }
  return maxLength;
}

console.log(maxConsecutiveOnes(nums, k));
