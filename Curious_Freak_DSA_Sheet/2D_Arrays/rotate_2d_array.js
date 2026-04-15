const arr=[[0,1,2],[3,4,5],[6,7,8]];


function transpose2DArray(arr)
{
    let n=arr.length;
    // let m=arr.length-1;
    for(let i=0;i<n-1;i++)
    {
         for(let j=i+1;j<n;j++)
         {
            [arr[i][j],arr[j][i]]=[arr[j][i],arr[i][j]]
         }
    }

    // return arr;
}


function rotate2DArray(arr)
{
    transpose2DArray(arr);
    // console.log(arr);
    for(let i=0;i<arr.length;i++)
    {
        let k=0;
        let j=arr.length-1;

        while(k<Math.floor(arr.length/2))
        {
            [arr[k][i],arr[j][i]]=[arr[j][i],arr[k][i]];
            k++;
            j--;
        }
    }
    console.log(arr)

    
}

rotate2DArray(arr)