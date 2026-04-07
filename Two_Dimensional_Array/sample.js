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


const arr=[[1,2,3],[4,5,6]];

arr.forEach(row=>
    console.log(row.join(" "));
)


