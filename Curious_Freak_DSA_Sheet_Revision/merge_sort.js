const arr=[1,3,9,2,5];

function merge(leftArray,rightArray)
{
    console.log("leftArray==",leftArray);
    console.log("rightArray==",rightArray)
    let result=[];
    let left=0;
    let right=0;

    while(left<leftArray.length &&  right<rightArray.length)
    {
       if(leftArray[left] < rightArray[right])
       {
         result.push(leftArray[left]);
         left++;
       }
       else{
        result.push(rightArray[right]);
        right++;
       }
    }
     console.log("result==",result)

    while(left<leftArray.length)
    {
        result.push(leftArray[left]);
        left++;
    }

    
    while(right<rightArray.length)
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
    
        let mid=Math.floor(arr.length/2);
        let leftsorted=mergeSort(arr.slice(0,mid));
        let rightSorted=mergeSort(arr.slice(mid))


        return merge(leftsorted,rightSorted);

}


console.log(mergeSort(arr))