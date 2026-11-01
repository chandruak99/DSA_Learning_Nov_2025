function stockSpanProblem(arr)
{
    let result=[];
    
    for(let i=0;i<arr.length;i++)
    {
       
        let count=1;
        if(i>0)
        {
             console.log(i)
            for(let j=i-1;j>=0;j--)
            {
               if(arr[j]>arr[i])
               {
                 break;
               }
               else
               {
                 count++;
               }
            }
            result.push(count)
        }
        else{
           result.push(count)
        }
    }
    return result;
}


// const arr=[100,80,90,120];
const arr=[100,80,60,70,60,75,85]
console.log(stockSpanProblem(arr));