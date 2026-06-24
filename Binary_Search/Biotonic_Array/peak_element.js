const arr=[1,2,4,5,7,8,3];



// function peakElement(arr)
// {
//    for(let i=1;i<arr.length;i++)
//    {
//         if(arr[i]<arr[i-1])
//         {
//              return true;
//         }
//    }
//    return false;
// }

// console.log(peakElement(arr))

//brutForce Solution
// function peakElement(arr)
// {
//      for(let i=0;i<arr.length;i++)
//      {
//          if((i===0 || arr[i]>arr[i+1]) && (i===arr.length-1 || arr[i]>arr[i+1]))
//          {
//             return i;
//          }
//      }
// }

//  console.log(peakElement(arr))



//Using Binary Search

function findPeakElement(arr) {


        let n=arr.length;
        if(n===1)
        {
            return 0;
        }
        if(arr[0]>arr[1])
        {
            return 0;
        }
        if(arr[n-1]>arr[n-2])
        {
            return n-1;
        }


        let low=1;
        let high=arr.length-2;

        while(low<=high)
        {
            let mid=Math.floor((low+high)/2);

            if(arr[mid]>arr[mid-1] && arr[mid]>arr[mid+1])
            {
                return mid;
            }
            else if(arr[mid]>arr[mid-1])
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

console.log(findPeakElement(arr));
