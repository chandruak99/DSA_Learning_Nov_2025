const arr = [[1, 2, 3, 4], [5, 6, 7, 8]];

const target = [4, 3, 2, 1];




// const arr = [1, 2, 3, 4];

const result = arr.some((item) => item.every((v, i) => v === target[i]));

console.log(result)