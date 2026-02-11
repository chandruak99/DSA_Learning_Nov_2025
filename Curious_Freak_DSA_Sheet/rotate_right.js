const arr=[1,2,3,4,5];

// const arr=[7,5,2,11,2,43,1,1]


// function rotateRight(arr,k)
// {

//     for(let i=0;i<k;i++)
//     {
//         const first=arr[0];

//         for(let i=0;i<arr.length;i++)
//         {
//             arr[i]=arr[i+1];
//         }
//         arr[arr.length-1]=first

//         console.log(arr);
//     }

// }

// rotateRight(arr,2);


    function rotateByK(arr, k) {
        k = k % arr.length; // handle cases where k > n
        console.log("k==",k)

        const reverse = (start, end) => {
            while (start < end) {
                [arr[start], arr[end]] = [arr[end], arr[start]];
                start++;
                end--;''
            }
        };

        reverse(0, arr.length - 1);       // reverse whole array
        reverse(0, k - 1);                // reverse first k
        reverse(k, arr.length - 1);       // reverse rest

        return arr;
    }

console.log(rotateByK(arr,2))