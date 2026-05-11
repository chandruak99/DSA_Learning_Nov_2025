const arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
const result = [];

let n = 4;
let m = 4;

for (let i = 0; i < n; i++) {
  result[i] = [];
  for (let j = 0; j < n; j++) {
    result[j][n - 1 - i] = arr[i][j];
  }
}

console.log(result);
