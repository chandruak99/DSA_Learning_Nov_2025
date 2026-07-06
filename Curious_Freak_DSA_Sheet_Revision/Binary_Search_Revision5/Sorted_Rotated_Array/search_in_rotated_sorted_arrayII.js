const nums =[1,0,1,1,1];

const target=0;


function searchInRotatedArray(arr,target)
{
   let low=0;
   let high=arr.length-1;

   while(low<=high)
   {
     let mid=Math.floor((low+high)/2);
     if(arr[mid]===target)
     {
        return true;
     }
     else if(arr[low]===arr[mid] && arr[mid]===arr[high])
     {
        low++;
        high--;
     }
     else if(arr[low]<=arr[mid])
     {
        if(arr[low]<=target && target<=arr[mid])
        { 
           
            high=mid-1;
        }
        else
        {
            low=mid+1;
        }
     }
     else{
         if(arr[mid]<=target && target <=arr[high])
         {
            low=mid+1;
         }
         else
         {
            high=mid-1;
         }
     }
    }

    return false;
}

console.log(searchInRotatedArray(nums,target));