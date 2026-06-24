// const arr=[3,9,10,20,17,5,1];
// const target=20;

// const arr=[1,2,3,4,5,10,9,8,7,6];
// const target=5;

const arr=[1,20,50,40,10];
const target=5;

function findPeak(arr)
{
        let low=0;
        let high=arr.length-1;


        while(low<high)
        {
            let mid=Math.floor((low+high)/2);
            if(arr[mid]<arr[mid+1])
            {
                low=mid+1;
            }
            else
            {
                high=mid;
            }
            
        }
        return low;
}

function searchAscending(arr,left,right,target)
{
   let low=left;
   let high=right;

   while(low<=high)
   {
      let mid=Math.floor((low+high)/2);

      if(arr[mid]===target)
      {
        return mid;
      }
      else if(target<arr[mid])
      {
        high=mid-1;
      }
      else
      {
        low=mid+1;
      }
   }
   return -1;
}

function searchDescending(arr,left,right,target)
{
   let low=left;
   let high=right-1;
   while(low<=high)
   {
     let mid=Math.floor((low+high)/2);
     
     if(arr[mid]===target)
     {
        return mid;
     }
     else if(target<arr[mid])
      {
        
         low=mid+1;
      }
      else
      {
       high=mid-1;
      }
   }
   return -1;
}

function searchBitonic(arr,target)
{
    let peakElement=findPeak(arr);
    console.log("peakElement==",peakElement)
    let leftSearch=searchAscending(arr,0,peakElement,target);
    console.log("leftSearch==",leftSearch)
    if(leftSearch!==-1)
    {
        return leftSearch;
    }
    
    return searchDescending(arr,peakElement+1,arr.length-1,target);

}

console.log(searchBitonic(arr,target));