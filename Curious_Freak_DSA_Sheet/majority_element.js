const arr=[2,2,1,1,1,2,2];
// const arr=[3,2,3]

//using moore's voting algorithm 
function majorityElement(arr)
{
    let count=0;
    let ele;
    for(let i=0;i<arr.length;i++)
    {
         if(count===0)
         {
            count=1;
            ele=arr[i];
            
         }
         else if(arr[i]===ele)
         {
            count++;
         }
         else
         {
            count--;
         }
    }

    let count1=0;
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]===ele)
        {
           count1++;
        }
    }


    if(count1 > ((arr.length)/2)){
        return ele;
    }
    return -1;
}

console.log(majorityElement(arr));