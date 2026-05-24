const arr=[1,1,2,1,1];
const k=3;

function countNumberOfNiceArrays(arr,k)
{
   
    function atMostK(k)
    {
       let left=0;
       let right=0;
       let result=0;
       let odd=0;
       while(right<arr.length)
       {
            if(arr[right]%2!==0)
            {
                odd++;
            }

            while(odd>k)
            {
                if(arr[left]%2!==0)
                {
                    odd--;
                }
                left++;
            }

            let length=right-left+1;
            result+=length;
            right++;
       }
       return result;
    }
    return atMostK(k)-atMostK(k-1);
}

console.log(countNumberOfNiceArrays(arr,k));