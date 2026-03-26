const arr = [-2, 6, -3, -10, 0, 2];
//using prefix suffix method
function maximumProductSubarray(arr) {
    let prefix = 1;
    let suffix = 1;
    let max = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (prefix === 0) {
            prefix = 1;
        }
        if (suffix === 0) {
            suffix = 1;
        }
        prefix = prefix * arr[i];
        suffix = suffix * arr[arr.length - 1 - i];


        max = Math.max(max, Math.max(prefix, suffix))
    }
    return max;
}

// console.log(maximumProductSubarray(arr))


function maximumProductSubarray(arr) {
    let max = arr[0];
    let currmax = arr[0];
    let currmin = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < 0) {
            [currmax, currmin] = [currmin, currmax];
        }

        currmax = Math.max(arr[i], currmax * arr[i]);
        currmin = Math.min(arr[i], currmin * arr[i]);

        max = Math.max(max, currmax)
    }

    return max;
}

console.log(maximumProductSubarray(arr));