
const nums=[2,2,2,1,2,2,1,2,2,2];
const k=2;


function printNiceSubarray(arr,k)
{
   let lefteven=0;
   let leftcore=0;
   let right=0;
   let odds=0;
   while(right<nums.length)
   {
        if(arr[right]%2!==0)
        {
            odds++;
        }

        while(odds>k)
        {
            if(arr[leftcore]%2!==0)
            {
                odd--;
            }
            leftcore++;
            lefteven=leftcore;
        }


        if(odds===k)
        {
            let tempLeft=leftcore;
            while(arr[tempLeft]%2===0)
            {
                tempLeft++;
            }


            for(let i=lefteven;i<=tempLeft;i++)
            {
                console.log(arr.slice(i,right+1))
            }
        }

        right++;
   }
   
}

printNiceSubarray(nums,k)