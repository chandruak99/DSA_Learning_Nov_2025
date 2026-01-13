function quickSort(arr, low = 0, high = arr.length - 1) {
    console.log("quick sort==",low,high)
    if (low < high) {
        // Partition the array and get pivot index
        let pi = partition(arr, low, high);
        console.log("pi==",pi)
        // Recursively sort elements before and after partition
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
    return arr;
}

function partition(arr, low, high) {
    let pivot = arr[high]; // choose last element as pivot
    let i = low - 1;       // index of smaller element

    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]]; // swap
        }
    }

    // Place pivot in correct position
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    // console.log(i)
    return i + 1; // return pivot index
}


console.log(quickSort([5,3,9,1,7]))