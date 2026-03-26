// const arr = [1, 3, 9, 2, 5];
const arr = [2, 4, 1, 3, 5];
let count = 0;
function mergeSort(arr) {
    let aux = new Array(arr.length);

    sort(arr, aux, 0, arr.length - 1);
    return count;
}

function sort(arr, aux, left, right) {

    // console.log(left,right)
    if (left >= right) {
        return
    }
    let mid = Math.floor((left + right) / 2);

    sort(arr, aux, left, mid);
    sort(arr, aux, mid + 1, right);
    merge(arr, aux, left, mid, right);




}

function merge(arr, aux, left, mid, right) {

    console.log("count==", count)
    console.log("arr==", arr)
    console.log("mid", mid);
    console.log(arr.slice(left, mid + 1));
    console.log(arr.slice(mid + 1, right + 1))

    for (let k = left; k <= right; k++) {
        aux[k] = arr[k];
    }

    let i = left;
    let j = mid + 1;
    let k = left;


    while (i <= mid && j <= right) {
        if (aux[i] <= aux[j]) {
            arr[k] = aux[i];
            i++
            k++;
        }
        else {
            arr[k] = aux[j];
            count = count + ((mid - i) + 1)
            j++;
            k++;
        }
    }


    while (i <= mid) {
        arr[k] = aux[i];
        i++;
        k++;
    }
    while (j <= right) {
        arr[k] = aux[j];
        j++;
        k++;
    }


}

console.log(mergeSort(arr))
