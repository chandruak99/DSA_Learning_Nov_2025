/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    const allPermutations = [];
    
    // 1. Helper function to generate all permutations using backtracking
    function backtrack(currentPath, remaining) {
        if (remaining.length === 0) {
            allPermutations.push([...currentPath]);
            return;
        }
        
        for (let i = 0; i < remaining.length; i++) {
            // Pick an element, move it to currentPath, and recurse
            currentPath.push(remaining[i]);
            let nextRemaining = [...remaining.slice(0, i), ...remaining.slice(i + 1)];
            backtrack(currentPath, nextRemaining);
            // Undo the move (backtrack)
            currentPath.pop();
        }
    }

    // 2. Generate all possible permutations
    backtrack([], [...nums]);

    // 3. Sort permutations lexicographically
    // We join them as strings or compare element by element
    allPermutations.sort((a, b) => {
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) return a[i] - b[i];
        }
        return 0;
    });

    // 4. Remove duplicates (if any) to find the unique "next"
    const uniquePerms = [];
    const seen = new Set();
    for (let p of allPermutations) {
        let s = p.join(',');
        if (!seen.has(s)) {
            uniquePerms.push(p);
            seen.add(s);
        }
    }

    // 5. Find current nums in the sorted list
    let currentIndex = -1;
    const currentStr = nums.join(',');
    for (let i = 0; i < uniquePerms.length; i++) {
        if (uniquePerms[i].join(',') === currentStr) {
            currentIndex = i;
            break;
        }
    }

    // 6. Identify the next one (or the first one if we are at the end)
    let nextIndex = (currentIndex + 1) % uniquePerms.length;
    let result = uniquePerms[nextIndex];

    // 7. Modify original array in-place
    for (let i = 0; i < nums.length; i++) {
        nums[i] = result[i];
    }
};