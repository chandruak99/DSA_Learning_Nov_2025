// const arr=[3,9,10,20,17,5,1];
// const target=20;

// const arr=[5,6,7,8,9,10,3,2,1];
// const target=30;

const arr=[1,2,3,4,5,10,9,8,7,6];
const target=5;
function peakElement(arr,target)
{
    let n=arr.length-1;
    if(arr[0]>arr[1])
    {
        return 0;
    }
    else if(arr[n-1]>arr[n-2])
    {
        return n-1;
    }

    let low=1;
    let high=arr.length-2;

    while(low<=high)
    {
        let mid=Math.floor((low+high)/2);
        console.log("mid==",mid)

        if(arr[mid]>arr[mid-1] && arr[mid]>arr[mid+1])
        {
            console.log("target==",target);
            console.log("arr[mid]==",arr[mid])
            if(target===arr[mid])
            {
                
                return mid;
            }
            else
            {
                if(target>arr[mid])
                {
                    low=mid+1;
                }
                else
                {
                    high=mid-1;
                }
            }
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

console.log(peakElement(arr,target));