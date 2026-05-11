// const arr=[[1,2,3],[4,5,6]];

// for(let i=0;i<arr.length;i++)
// {
//     let row="";
//     for(let j=0;j<arr[i].length;j++)
//     {
//         row+=arr[i][j]+" ";
//     }
//    console.log(row.trim())
// }

// const arr = [
//   [1, 2, 3],
//   [4, 5, 6],
// ];

// arr.forEach((row) => console.log(row.join(" ")));

const arr = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
];
let result = [];

for (let k = 0; k < arr.length; k++) {
  let i = 0;
  let row = "";
  let j = arr.length - 1 - k;
  while (i < arr.length) {
    row = row + arr[i][j] + " ";
    i++;
  }
  let rowArray = row.trim().split(" ").map(Number);
  result.push(rowArray);
  //   console.log(row.trim());
}
console.log("result==", result);
