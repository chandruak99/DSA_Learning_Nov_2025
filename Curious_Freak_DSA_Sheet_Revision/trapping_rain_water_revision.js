// const arr = [3, 0, 1, 0, 4, 0, 2];
// const arr = [3, 0, 2, 0, 4]
const arr = [2, 1, 5, 3, 1, 0, 4]

function trappingRainWater(arr) {
    let left = 0;
    let right = arr.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    let totalSum = 0;

    while (left < right) {
        if (arr[left] <= arr[right]) {


            if (arr[left] > leftMax) {
                leftMax = arr[left];
            }
            totalSum = totalSum + (leftMax - arr[left]);
            left++;
        }
        else {
            if (arr[right] > rightMax) {
                rightMax = arr[right];
            }
            totalSum = totalSum + (rightMax - arr[right]);
            right--;
        }
    }
    return totalSum;
}


console.log(trappingRainWater(arr))