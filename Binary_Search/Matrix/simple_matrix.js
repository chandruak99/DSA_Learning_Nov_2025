const arr=[[1,2,3],[4,5,6],[7,8,9]];

const target=5;


function findElementInMatrix(arr,target)
{
    for(let i=0;i<arr.length;i++)
    {
        for(let j=0;j<arr[i].length;j++)
        {
            if(arr[i][j]===target)
            {
                return [i,j];
            }
        }
    }
    return -1;
}


function printMatrix(arr)
{
    for(let i=0;i<arr.length;i++)
    {
        for(let j=0;j<arr[i].length;j++)
        {
            process.stdout.write(`${arr[i][j]} `);
        }
        console.log("")
    }
}



// console.log(findElementInMatrix(arr,target))

printMatrix(arr);