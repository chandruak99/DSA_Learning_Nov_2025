// const arr = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];
const arr = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];



function transpose(arr) {

    let n = arr.length;
    let m = arr[0].length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            [arr[i][j], arr[j][i]] = [arr[j][i], arr[i][j]];
        }
    }

    return arr;

}

// function reverseArray(row) {
//     let n = row.length;
//     for (let i = 0; i < row.length / 2; i++) {
//         [row[i], row[n - 1 - i]] = [row[n - 1 - i], row[i]];
//     }

//     return row;
// }

function rotateby90(arr) {
    // console.log("before transpose==", arr)
    transpose(arr);

    for (let i = 0; i < arr.length; i++) {
        let k = 0;
        let j = arr.length - 1;
        while (k < arr.length - 1) {
            [arr[k][i], arr[j][i]] = [arr[j][i], arr[k][i]];
            k++;
            j--;
        }
    }

    return arr;

}

console.log(rotateby90(arr));