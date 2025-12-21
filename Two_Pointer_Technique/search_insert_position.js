const arr=[1,3,5,6];
const target=0;


// let found=0;

// function findSearchElement(arr,target)
// {
// for(let i=0;i<arr.length;i++)
// {
//     if(arr[i]===target)
//     {
        
//         return i;
//     }
// }


// if(target<min)
// {
// let min=target-arr[0];
// let minPosition=0;
// console.log("min==",min)
// for(let i=0;i<arr.length;i++)
// {
//      if(Math.abs(target-arr[i]) < min)
//      {
        
//         min=Math.abs(target-arr[i])
//         minPosition=i;

//         console.log("min",min)
//      }
// }
 
// return minPosition+1;
// }
// else
// {
//     return 0;
// }
// }

// console.log(findSearchElement(arr,target))


function searchInsertPosition(arr,target)
{
    let i=0;
    let j=arr.length;

    if(target < arr[0])
    {
    return 0;
    }
    else
    {
          while(i<j)
          {
            if(arr[i]===target)
            {
                return i;
            }
            else if(arr[i]<target && arr[i+1] > target)
            {
                return i+1;
            }
            i++;

            
        
          }
       return i;
    }



}

console.log(searchInsertPosition(arr,target))
