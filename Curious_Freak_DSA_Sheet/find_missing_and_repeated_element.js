const arr=[6,4,3,2,1,1];
let n=6;


// //bruteforce
// function find_missing_repeated(arr,n)
// {
// let count=0;

// let repeated=-1;
// for(let i=1;i<=n;i++)
// {
//     count=0;
//     for(let j=0;j<arr.length;j++)
//     {
//         if(arr[j]===i)
//         {
//             count++;
//         }

//     }

//     if(count===0)
//     {
//        missing=i;
//     }
//     if(count>1)
//     {
//        repeated=i;
//     }
// }
//    return {missing,repeated};

// }


// function find_missing_repeated(arr,n)
// {
//     const 
// }

// console.log(find_missing_repeated(arr,n))



// const array=new Array(n+1).fill(0);

// for(let i=0;i<arr.length;i++)
// {
//     array[arr[i]]++;
    
// }
// let missing=-1;
// let duplicate=-1
// console.log(array)
// for(let i=1;i<n+1;i++)
// {
//    if(array[i]>1)
//    {
//      missing=i;
//    }
//    if(array[i]===0)
//    {
//      duplicate=i;
//    }

// }

// console.log("duplicate==",duplicate);
// console.log("missing==",missing)



//using hashing
// let map=new Map();

// for(let num of arr)
// {
//     map.set(num,(map.get(num) || 0)+1)
// }

// console.log("map==",map)
// let missing=-1;
// let duplicate=-1;

// for(let i=1;i<=n;i++)
// {
//     if(map.get(i)>1)
//     {
//         duplicate=i;
//     }

//     if(map.get(i)===undefined)
//     {   
//         missing=i;
//     }
//     // console.log(map.get(i))
// }

// console.log(missing);
// console.log(duplicate)




//using mathematical approach

let sumNum=Math.floor((n*(n+1))/2);
let sumNum2=Math.floor((n*(n+1)*((2*n)+1))/6);

let sumArr=0;
let sumSqArr=0;

for(let i=0;i<arr.length;i++)
{
    sumArr=sumArr+arr[i];
    sumSqArr=sumSqArr+(arr[i]*arr[i]);
}

console.log("sumArr",sumArr);
console.log("sumSqArr",sumSqArr)


let diff1=sumNum-sumArr;
let diff2=sumNum2-sumSqArr;

let sol1=Math.floor(diff2/diff1);

let M=Math.floor((sol1+diff1)/2);

let R=sol1-M;

console.log(R)
console.log(M)

// console.log("sumNum",sumNum);
// console.log("sumNum2==",sumNum2);


