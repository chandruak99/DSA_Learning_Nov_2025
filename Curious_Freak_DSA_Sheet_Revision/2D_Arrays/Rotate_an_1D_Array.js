
//Printing the rotated pattern
// const arr = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];


// for (let k = 0; k < arr.length; k++) {
//     let row = "";
//     let i = 0;
//     let j = arr.length - 1 - k;
//     while (i < arr.length) {
//         row = row + arr[i][j] + " ";
//         i++;
//     }

//     console.log(row);

// }


const arr = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];


function rotateArray(arr, n, m) {

    let result = Array.from({ length: 4 }, () => []);

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            result[j][n - 1 - i] = arr[i][j];
        }
    }

    console.log(result);
}

rotateArray(arr, 4, 4)


