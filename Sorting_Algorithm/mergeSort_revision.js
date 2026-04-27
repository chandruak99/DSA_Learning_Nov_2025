const arr = [1, 3, 9, 2, 5];

function merge(leftArr, rightArr) {
    let result = [];
    let left = 0;
    let right = 0;
    while (left < leftArr.length && right < rightArr.length) {
        if (leftArr[left] < rightArr[right]) {
            result.push(leftArr[left]);
            left++;
        }
        else {
            result.push(rightArr[right]);
            right++;
        }
    }

    while (left < leftArr.length) {
        result.push(leftArr[left]);
        left++;
    }

    while (right < rightArr.length) {
        result.push(rightArr[right]);
        right++;
    }

    return result;
}

function mergeSort(arr) {

    if (arr.length <= 1) {
        return arr;
    }


    let mid = Math.floor(arr.length / 2);

    let leftsorted = mergeSort(arr.slice(0, mid));
    let rightSorted = mergeSort(arr.slice(mid));

    let result = merge(leftsorted, rightSorted);
    return result;

}

console.log(mergeSort(arr));