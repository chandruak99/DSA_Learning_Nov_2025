let arr=[1,5,3,2];


function countTripelet(arr)
{
    let count=0;
    arr.sort((a,b)=>b-a)
    for(let i=0;i<arr.length;i++)
    {
        let c=arr[i];
        let left=i+1;
        let right=arr.length-1;

        while(left < right)
        {
            let sum=arr[left]+arr[right]
            if(sum===c)
            {
                count++;
                left++;
                right++;
            }
            else if(sum<c)
            {
                right--;
            }
            else {
                left++;
            }
        }
    }

    return count;
}

console.log(countTripelet(arr))