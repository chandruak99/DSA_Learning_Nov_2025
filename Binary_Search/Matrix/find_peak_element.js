// const arr=[[1,2,3,1,4,4],[2,9,3,2,3,2],[1,7,6,0,1,3],[3,6,2,3,7,2]];
const arr=[[10,20,15],[21,30,14],[7,16,32]];



function findPeakElement(arr)
{
    let n=arr.length;
    let m=arr[0].length;
    console.log("n==",n);
    console.log("m==",m)

    for(let i=0;i<n;i++)
    {
        for(let j=0;j<m;j++)
        {
            let val=arr[i][j];


            let top=i>0 ?arr[i-1][j]:-1;
            let bottom = i<n-1 ? arr[i+1][j]:-1;
            let left = j>0 ? arr[i][j-1]:-1;
            let right = j<m-1 ? arr[i][j+1]:-1

            if(val > top && val > bottom && val >left && val >right)
            {
                return [i,j];
            }
         }
    }
}

console.log(findPeakElement(arr))