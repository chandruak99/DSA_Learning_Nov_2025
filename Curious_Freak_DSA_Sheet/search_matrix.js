const matrix=[[1,3,5,7],[10,11,16,20],[23,30,34,60]];
const search=3;


function checkElementPresence(matrix,search)
{
    for(let i=0;i<matrix.length;i++)
    {
        for(let j=0;j<matrix[i].length;j++)
        {
            // console.log(matrix[i][j]);
            if(search===matrix[i][j]){
                return true;
            }
        }
    }
    return false;
}

console.log(checkElementPresence(matrix,search))

