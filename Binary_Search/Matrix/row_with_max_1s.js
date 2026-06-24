// const arr=[[0,1,1,1],[0,0,1,1],[1,1,1,1],[0,0,0,0]];


// const arr=[[0,0],[1,1]];
const arr=[[0,0],[0,0]]

// bruteForce method
// function max1sInRows()
// {
//    let max=-Infinity;
   

//    for(let i=0;i<arr.length;i++)
//    {
//      let count=0;
//      for(let j=0;j<arr[i].length;j++)
//      {
//         if(arr[i][j]===1)
//         {
//             count++;
//         }
//      }
//      if(count !==0 && count >max)
//      {
//         max=count;
//         maxPosition=i;
//      }
//    }

//    return max!==-Infinity ? maxPosition:-1;
// }

// console.log(max1sInRows(arr)); 

//Using Binary Search
function lowerBound(arr,target)
{
    let low=0;
    let high=arr.length-1;
    let ans=arr.length;

    while(low<=high)
    {
        let mid=Math.floor((low+high)/2);

        if(arr[mid]>=target)
        {
            ans=mid;
            high=mid-1;
        }
        else{
            low=mid+1;
        }
    }
    return ans;
}

function max1sInRows(arr)
{
    let count_max=0;
    let index=-1;



    for(let i=0;i<arr.length;i++)
    {
        let count_ones=arr[i].length-lowerBound(arr[i],1);
        // console.log("count_ones==",count_ones)

        if(count_ones > count_max)
        {
            count_max=count_ones;
            index=i;
        }
    }

    return index;
}

console.log(max1sInRows(arr))