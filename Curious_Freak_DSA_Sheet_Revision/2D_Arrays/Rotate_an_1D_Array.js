
//Printing the rotated pattern 
const arr = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];


for (let k = 0; k < arr.length; k++) {
    let row = "";
    let i = 0;
    let j = arr.length - 1 - k;
    while (i < arr.length) {
        row = row + arr[i][j] + " ";
        i++;
    }

    console.log(row);

}