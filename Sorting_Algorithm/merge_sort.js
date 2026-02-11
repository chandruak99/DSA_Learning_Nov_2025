let arr=[1,3,2,5,9];
// let arr=[0,1,2,0,1,2];

function merge(arr1,arr2)
{

    console.log("merge",arr1,arr2)
    let left=0;
    let right=0;
    let result=[];
     while(left< arr1.length && right <arr2.length)
     {
        if(arr1[left]<arr2[right])
        {
            result.push(arr1[left]);
            left++;
        }
        else
        {
            result.push(arr2[right]);
            right++;
        }
     }

     console.log("result==",result);
     while(left<arr1.length)
     {
        result.push(arr1[left]);
        left++;
     }
     while(right< arr2.length)
     {
        result.push(arr2[right]);
        right++;
     }

     return result;
}

function mergeSort(arr)
{
    if(arr.length<=1)
    {
        return arr;
    }
    

    let mid=Math.floor(arr.length/2);
    console.log("left==",arr.slice(0,mid))
    console.log("right",arr.slice(mid))

    let leftsorted=mergeSort(arr.slice(0,mid));
    let rightSorted=mergeSort(arr.slice(mid));
    
    return merge(leftsorted,rightSorted);
    
}


console.log(mergeSort(arr))