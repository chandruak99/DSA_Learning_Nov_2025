const arr=[[3,4,7,9],[12,13,16,18],[20,21,23,29]];
const target=13;


//bruteforce is using nested for loopf and doing linear serach
//using binary search 
function binarySearch(arr,target)
{
  let left=0;
  let right=arr.length-1;

  while(left<=right)
  {
    let mid=Math.floor((left+right)/2);
    if(arr[mid]===target)
    {
        return true;
    }
    else if (target<arr[mid])
    {
        right=mid-1;
    }
    else{
        left=mid+1;
    }
  }

  return false;
}

function searchElement(arr,target)
{
    for(let i=0;i<arr.length;i++)
    {
        // console.log(arr[i][0],arr[i][arr[i].length-1])
        if(target>=arr[i][0] && target<=arr[i][arr[i].length-1])
        {
        //   console.log("i==",i);
          return binarySearch(arr[i],target);
        }
    }
}

console.log(searchElement(arr,target));

