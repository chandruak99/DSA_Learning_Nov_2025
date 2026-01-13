function twoSum(nums, target) {
    const map = new Map(); // value -> index

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        console.log(map)
        if (map.has(complement)) {
            return [map.get(complement), i];
        }

        map.set(nums[i], i);
    }
    return [];
}

// Examples
console.log(twoSum([2,7,11,15], 9));   // [0,1]
// console.log(twoSum([3,2,4], 6));       // [1,2]
// console.log(twoSum([3,3], 6));         // [0,1]
