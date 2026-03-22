const arr=[1,3,9,2,5];
let count=0;
function merge(leftArray,rightArray)
    {
        let left=0;
        let right=0;
        let result=[];
        while(left < leftArray.length && right < rightArray.length )
        {
            if(leftArray[left] < rightArray[right])
            {
                result.push(leftArray[left]);
                left++;
            }
            else
            {

                result.push(rightArray[right]);
                count=count+((leftArray.length-1)-left+1)
                console.log("count==",count)
                right++;
            }
        }

        while(left < leftArray.length)
        {
            result.push(leftArray[left]);
            left++;
        }

        while(right < rightArray.length)
        {
            result.push(rightArray[right]);
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
     let mid=Math.floor((arr.length)/2);

     let leftSubarray=mergeSort(arr.slice(0,mid));
     let rightSubarray=mergeSort(arr.slice(mid));

     return  merge(arr.slice(0,mid),rightSubarray);
    // return count;

    //  console.log("leftSubarray==",arr.slice(0,mid));
    //  console.log("rightSubarray==",arr.slice(mid,high))
}


console.log(mergeSort(arr))