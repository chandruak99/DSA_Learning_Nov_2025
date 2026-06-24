const arr=[[1,5,9],[14,20,21],[30,34,43]];

const x=14;

function searchElementInMatrix(arr,x)
{
    let n=arr.length;
    let m=arr[0].length;
    let low=0;
    let high=(n * m)-1;

    while(low<=high)
    {
        let mid=Math.floor((low+high)/2);

        let row=Math.floor(mid/m);
        let col=Math.floor(mid%m);
        // console.log("row=",row);
        // console.log("col=",col)
        // console.log("arr[row][col]",arr[row][col]);

        if(arr[row][col]===x)
        {
            return true;
        }
        else if(arr[row][col]<x)
        {
            low=mid+1;
        }
        else
        {
            high=mid-1;
        }
    }

    return false;
}

console.log(searchElementInMatrix(arr,x))