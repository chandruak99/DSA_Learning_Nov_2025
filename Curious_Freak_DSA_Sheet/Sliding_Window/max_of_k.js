const arr = [10, 12, 11, 9, 8];
// arr=[1,2,3]
const k = 4;

let queue = [];
for (let i = 0; i < arr.length; i++) {
    queue.push(arr[i]);
    queue.sort((a, b) => a - b);

    if (queue.length > 4) {
        queue.shift();
    }
}

console.log(queue[0]);
// let a = 5;

// console.log(a);
// a = 6;
// console.log(a)