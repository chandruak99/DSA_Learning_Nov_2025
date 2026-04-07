
const arr = [1, 2, 3];
//bruteforce
// function recursive(arr, ans, ds, freq) {

//     if (ds.length === arr.length) {
//         ans.push([...ds]);
//         return;
//     }

//     for (let i = 0; i < arr.length; i++) {
//         if (!freq[i]) {
//             ds.push(arr[i]);
//             freq[i] = 1;
//             recursive(arr, ans, ds, freq);
//             freq[i] = 0;
//             ds.pop();
//         }


//     }
// }

// function permute(arr) {
//     const ans = [];
//     const ds = [];

//     const freq = new Array(arr.length).fill(0);

//     recursive(arr, ans, ds, freq);
//     return ans;


// }

// console.log(permute(arr))

// optimized 



function recursion(index, arr, ans) {
    if (index === arr.length) {
        ans.push([...arr]);
    }

    for (let i = index; i < arr.length; i++) {
        [arr[index], arr[i]] = [arr[i], arr[index]];
        recursion(index + 1, arr, ans);
        [arr[index], arr[i]] = [arr[i], arr[index]];
    }
}

function permute(arr) {
    const ans = [];
    recursion(0, arr, ans);
    return ans;
}

console.log(permute(arr))