const arr = [10, 5, 2, 7, 1, -10];

const k = 15;
function longestSubarray(arr, k) {
  let maxLength = -Infinity;
  let prefix = new Map();
  let currentSum = 0;
  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];

    if (currentSum === k) {
      maxLength = i + 1;
    }

    let previous = currentSum - k;
    console.log("previous==", previous);
    console.log("previous has", prefix.has(previous));
    if (prefix.has(previous)) {
      maxLength = Math.max(maxLength, i - prefix.get(previous));
    }

    if (!prefix.has(currentSum)) {
      prefix.set(currentSum, i);
    }

    console.log("prefix==", prefix);
  }

  return maxLength === -Infinity ? 0 : maxLength;
}

console.log(longestSubarray(arr, k));
