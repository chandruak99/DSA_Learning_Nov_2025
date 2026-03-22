function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    // Create one auxiliary array to use throughout the process
    // This prevents excessive memory allocation/Garbage Collection
    let aux = new Array(arr.length);
    sort(arr, aux, 0, arr.length - 1);
    return arr;
}

/**
 * Recursive function to divide the array
 */
function sort(arr, aux, left, right) {
    if (left >= right) return;

    let mid = Math.floor(left + (right - left) / 2);
    
    console.log("mid==",mid)
    // Divide
    sort(arr, aux, left, mid);
    sort(arr, aux, mid + 1, right);

    // Conquer: Merge the sorted halves
    merge(arr, aux, left, mid, right);
}

/**
 * Merge function to combine two sorted halves
 */
function merge(arr, aux, left, mid, right) {
    // Copy the current range into the auxiliary array
    for (let k = left; k <= right; k++) {
        aux[k] = arr[k];
    }

    let i = left;    // Pointer for left half
    let j = mid + 1; // Pointer for right half

    for (let k = left; k <= right; k++) {
        if (i > mid) {
            // Left half exhausted
            arr[k] = aux[j++];
        } else if (j > right) {
            // Right half exhausted
            arr[k] = aux[i++];
        } else if (aux[j] < aux[i]) {
            // Right element is smaller
            arr[k] = aux[j++];
        } else {
            // Left element is smaller or equal (maintains stability)
            arr[k] = aux[i++];
        }
    }
}

// Example usage:
const data = [2, 4, 1, 3, 5];
console.log("Sorted:", mergeSort(data));