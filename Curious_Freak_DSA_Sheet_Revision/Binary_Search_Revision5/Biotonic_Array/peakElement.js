 
 const arr=[1,2,4,5,7,8,3];
 function findPeakElement(arr)
    {
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

        let left=1;
        let right=arr.length-2;

        while(left<=right)
        {
            let mid=Math.floor((left+right)/2)
            if(arr[mid]>arr[mid-1] && arr[mid]>arr[mid+1])
            {
                return mid;
            }
            else if(arr[mid]>arr[mid-1])
            {
                left=mid+1
            }
            else
            {
                right=mid-1;
            }
        }
    }


console.log(findPeakElement(arr));
