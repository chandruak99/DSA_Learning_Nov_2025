// const arr=[1,1,2,1,1];

// const k=3;

// const nums=[2,4,6];
// const k=1;

const nums=[2,2,2,1,2,2,1,2,2,2];
const k=2;


function countNiceSubarrays(arr,k)
{
    

    function atMost(k)
    {
        let left=0;
        let right=0;
        let odds=0;
        let result=0;
        while(right<arr.length)
        {
            let length=0;
        
            if(arr[right]%2!==0)
            {
                odds++;
            }

            while(odds>k)
            {
                if(arr[left]%2!==0)
                {
                    odds--;
                }
                left++;
            }

            
            length=right-left;
            result+=length;
            right++;
            

        }

        return result;
}
    
    return atMost(k)-atMost(k-1);
}
console.log(countNiceSubarrays(nums,k));