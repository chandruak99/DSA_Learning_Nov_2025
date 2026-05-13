// const arr=[1,2,1];
// const arr=[0,1,2,2];

// const arr=[1,2,3,2,2];
// const arr=[1];
const arr=[1,1];

function fruitIntoBaskets(arr)
{
    let left=0;
    let right=0;
    let backetSize=2;
    let freq=new Map();
    let maxLength=0;
    while(right<arr.length)
    {
        freq.set(arr[right],(freq.get(arr[right])||0)+1);


        while(freq.size>2)
        {
            if(freq.get(arr[left])>1)
            {
                freq.set(arr[left],(freq.get(arr[left]))-1);
            }
            else
            {
                freq.delete(arr[left]);
            }
            left++;
        }

        if(freq.size<=2)
        {
            maxLength=Math.max(maxLength,right-left+1);
        }
        right++;
    }

    return maxLength;
}
console.log(fruitIntoBaskets(arr))