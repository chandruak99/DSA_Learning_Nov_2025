const arr=[5,3,2,1,4];


let count=0;
function merge(arr1,arr2)
{
    let left=0;
    let right=0;
    let result=[];

    while(left<arr1.length && right<arr2.length)
    {
        if(arr1[left] <arr2[right])
        {
           result.push(arr1[left]);
           left++;
        }
        else
        {

             result.push(arr2[right]);
             count=count+(arr1.length-left);
        console.log("count==",count)
             right++;
        }
    }

    while(left < arr1.length)
    {
        result.push(arr1[left]);
        left++;
    }

    while(right < arr2.length)
    {
        result.push(arr2[right]);
        
        right++;
    }

    return result;
}

function mergeSort(arr)
{


   if(arr.length <=1)
    {
        return arr;
    }
   let mid=Math.floor(arr.length/2);
 
//    console.log("mid==",mid)
     
//    console.log("leftSorted==",arr.slice(0,mid));
//    console.log("rightSorted==",arr.slice(mid,arr.length))
   let leftSorted=mergeSort(arr.slice(0,mid));
   let rightSorted=mergeSort(arr.slice(mid,arr.length));


   return merge(leftSorted,rightSorted);
}


console.log(mergeSort(arr));
console.log("count==",count);