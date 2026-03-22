// let nums = [1, 0, -1, 0, -2, 2];
let nums = [2, 2, 2, 2, 2]
let target = 8;
// let nums = [-2, -1, -1, 1, 1, 2, 2];
// let target = 0;

function fourSum(nums, target) {
    let result = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        for (let j = i + 1; j < nums.length - 2; j++) {
            if (j > 1 && nums[j] === nums[j - 1]) continue;

            let left = j + 1;
            let right = nums.length - 1;

            while (left < right) {
                let sum = nums[left] + nums[right] + nums[i] + nums[j];
                if (sum === target) {

                    result.push([nums[left], nums[right], nums[i], nums[j]]);
                    while (left < right && nums[left] === nums[left + 1]) left++;
                    while (left < right && nums[right] === nums[right - 1]) right--;

                    left++;
                    right--;
                }
                else if (sum < target) {
                    left = left + 1;
                }
                else {
                    right = right - 1;
                }
            }

        }
    }

    return result

}

console.log(fourSum(nums, target))