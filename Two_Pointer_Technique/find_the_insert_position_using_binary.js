const arr=[1,2,3,5,6,7];

const target=0;

function findInsertPosition(arr,target)
{
     let low=0;
     let high=arr.length-1;

     while(low<=high)
     {
        // console.log("low==",low)
        let mid=Math.floor((low+high)/2);
        // console.log("mid==",mid)
       
            if(arr[mid]===target)
            {
                return mid;
            }

            else if(target >arr[mid])
            {
               low=mid+1;
            }
            else
            {
                high=mid-1;
            }
        
        
     }
     return low;
}
console.log(findInsertPosition(arr,target))