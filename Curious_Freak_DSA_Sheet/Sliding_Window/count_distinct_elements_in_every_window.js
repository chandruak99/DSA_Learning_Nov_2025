const arr = [1, 2, 1, 3, 4, 2, 3];
const k = 4;


// function countFreq(newArr) {
//     let freq = new Map();
//     for (let i = 0; i < newArr.length; i++) {

//         if (freq.has(newArr[i])) {
//             freq.set(newArr[i], freq.get(newArr[i]) + 1);
//         }
//         else {
//             freq.set(newArr[i], freq.get(newArr) || 1);
//         }
//     }
//     return freq.size;
// }

// function countDistinct(arr, k) {
//     const q = [];
//     let result = [];

//     for (let i = 0; i < arr.length; i++) {
//         q.push(arr[i]);

//         if (q.length > k) {
//             q.shift();
//         }

//         if (q.length === k) {
//             let count = countFreq(q);
//             result.push(count)
//         }
//     }


//     return result;
// }
// console.log(countDistinct(arr, k));


//optimized solution 




function countDistinct(arr, k) {


    let map = new Map();
    let result = [];

    // console.log("arr==", arr);

    for (let i = 0; i < k; i++) {
        map.set(arr[i], (map.get(arr[i]) || 0) + 1);

    }
    result.push(map.size);
    // console.log("map,", map)

    for (let i = k; i < arr.length; i++) {

        // console.log("map,", map)
        let removeLast = arr[i - k];
        if (map.get(removeLast) === 1) {
            map.delete(removeLast);
        }
        else {
            map.set(removeLast, map.get(removeLast) - 1);
        }

        let newElement = arr[i];
        map.set(newElement, (map.get(newElement) || 0) + 1);
        result.push(map.size)
    }
    return result;

}

console.log(countDistinct(arr, k));
