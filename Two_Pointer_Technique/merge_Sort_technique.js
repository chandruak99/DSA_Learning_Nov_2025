const arr=[5,2,9,1,3]

function merge(sortedleft,sortedright)
{
    let left=sortedleft;
    let right=sortedright;

    let i=0;
    let j=0;
    let result=[];
    while(i< left.length && j< right.length)
    {
        if(left[i]<right[j])
        {
            result.push(left[i]);
            i++;
        }
        else
        {
            result.push(right[j]);
            j++;
        }
    }

    while(i<left.length)
    {
        result.push(left[i++]);
    }
    while(j<right.length)
    {
        result.push(right[j++])
    }

    return result;
}

function mergeSort(arr)
{
   if(arr.length<=1)
   {
    return arr;
   }

//    let left=0;
//    let right=arr.length-1;
   let mid=Math.floor(arr.length/2);

   const left=arr.slice(0,mid);
   const right=arr.slice(mid);

   const sortedLeft=mergeSort(left);
   const sortedRight=mergeSort(right)

   console.log("sortedLeft==",sortedLeft);

   console.log("sortedRight==",sortedRight)

   return merge(sortedLeft,sortedRight);
   
}

console.log(mergeSort(arr))