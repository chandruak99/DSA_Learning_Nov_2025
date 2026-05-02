// const arr=[1,5,3,2];
const arr=[3,16,16,7,9,16,12,16,6,9];

// function countTripelets(arr)
// {
//     let count=0;
//         arr.sort((a,b)=>b-a)
//         for(let i=0;i<arr.length;i++)
//         {
//             let c=arr[i];
//             let left=i+1;
//             let right=arr.length-1;
    
//             while(left < right)
//             {
//                 let sum=arr[left]+arr[right]
//                 if(sum===c)
//                 {
//                     count++;
//                     left++;
//                     right--;
//                 }
//                 else if(sum<c)
//                 {
//                     right--;
//                 }
//                 else {
//                     left++;
//                 }
//             }
//         }

//         return count;
// }

// console.log(countTripelets(arr));


// function countTriplet(arr) {
//         // code here
//         let count=0;

//         let unique=[...new Set([...arr])]
        
//         unique.sort((a,b)=>b-a)
//         for(let i=0;i<unique.length;i++)
//         {
//             let c=unique[i];
//             let left=i+1;
//             let right=unique.length-1;
          
    
//             while(left < right)
//             {
//                 let sum=unique[left]+unique[right]
//                 if(sum===c)
//                 {
//                     count++;
//                     left++;
//                     right--;
//                 }
//                 else if(sum<c)
//                 {
//                     right--;
//                 }
//                 else {
//                     left++;
//                 }
//             }
//         }

//         return count;
//     }
// console.log(countTriplet(arr));


function countTriplets(arr) {
    // 1. Frequency map to remember if we had duplicates in the original array
    let freq = new Map();
    for (let num of arr) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }

    console.log("freq==",freq);

    // 2. Create unique array and sort ascending
    let uniqueArr = Array.from(freq.keys()).sort((a, b) => a - b);

    console.log("uniqueArr==",uniqueArr)
    
    let count = 0;
    let n = uniqueArr.length;

    // 3. Iterate backwards, treating uniqueArr[i] as the target 'c'
    for (let i = n - 1; i >= 0; i--) {
        let c = uniqueArr[i];
        let left = 0;
        let right = i - 1;

        while (left <= right) {
            console.log("left==",left);
            console.log("right==",right)
            let a = uniqueArr[left];
            let b = uniqueArr[right];
            console.log("a-->",a);
            console.log("b-->",b)

            if (a + b === c) {
                // If a and b are different, it's a valid distinct triplet
                if (a !== b) {
                    console.log("first if")
                    count++;
                } 
                // If a and b are the same (e.g., 1 + 1 = 2), 
                // we only count it if the original array had at least two 1s.
                else if (freq.get(a) >= 2) {
                    console.log("second if")
                    count++;
                }
                
                left++;
                right--;
            } 
            else if (a + b < c) {
                left++;
            } 
            else {
                right--;
            }
        }
    }

    return count;
}

// Test Cases
// console.log(countTriplets([1, 5, 3, 2]));    // Output: 2
// console.log(countTriplets([2, 3, 4]));       // Output: 0
//console.log(countTriplets([1, 2, 1, 1]));    // Output: 1
// console.log(countTriplets([1,1,2]));
console.log(countTriplets([2,2,2,2,1,1,1]))

// console.log(countTriplets([3,16,16,7,9,16,12,16,6,9]))