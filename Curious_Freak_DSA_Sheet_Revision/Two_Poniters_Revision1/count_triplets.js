const arr=[2,2,2,2,1,1,1];
// const arr=[1,5,3,2];

function countTriplet(arr)
{
    let count=0;
    let n=arr.length;
    let freq=new Map();
    for(let i=0;i<arr.length;i++)
    {
        freq.set(arr[i],(freq.get(arr[i])||0)+1);
    }
    
    let uniqueArr=Array.from(freq.keys()).sort((a,b)=>a-b);

    console.log("unique==",uniqueArr)


    for(let i=n-1;i>=0;i--)
    {

        let c=uniqueArr[i];
        let left=0;
        let right=i-1;


        while(left <=right)
        {
            let a=uniqueArr[left];
            let b=uniqueArr[right];
            
            if(a+b===c)
            {
                if(a!==b)
                {
                    count++;
                }
                else if(freq.get(a)>1)
                {
                    count++
                }
                left++;
                right--;
            }
            else if(a+b<c)
            {
                left++;
            }
            else{
                right--;
            }
        }

    }


    return count;
}

console.log(countTriplet(arr));