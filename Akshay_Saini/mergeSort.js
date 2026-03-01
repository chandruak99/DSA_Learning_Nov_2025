const arr=[1,3,8,2,5];

function merge(leftArray,rightArray){
   let left=0;
   let right=0;
   let result=[];
   while(left<leftArray.length && right<rightArray.length)
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
     let leftSorted=mergeSort(arr.slice(0,mid));
     let rightSorted=mergeSort(arr.slice(mid));
     return merge(leftSorted,rightSorted)

    
}
console.log(mergeSort(arr))