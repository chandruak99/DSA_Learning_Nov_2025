// const arr=[2,5,6,0,0,1,2];

const arr=[1,0,1,1,1];
const target=0;
// const target=1;

function searchRotatedArray(arr,target)
{
    let left=0;
    let right=arr.length-1;

    while(left<right)
    {
       let mid=Math.floor((left+right)/2);

       if(arr[mid]===target)
       {
         return true;
       }
       else if(arr[left]===arr[mid] && arr[mid]===arr[right])
       {
         left++;
         right--;
       }
       else if(arr[left]<=arr[mid]){
           if(arr[left]<=target && target<arr[mid] )
           {
             right=mid-1;
           }
           else
           {
             left=mid+1;
           }
       }
       else
       {
          if(arr[mid]<=target && target<=arr[right])
          {
             left=mid+1
          }
          else
          {
            right=mid-1;
          }
       }
    }

    return false;
}

console.log(searchRotatedArray(arr,target))