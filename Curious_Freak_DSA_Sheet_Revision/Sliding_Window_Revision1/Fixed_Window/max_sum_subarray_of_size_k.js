const arr=[100,200,300,400];

const k=2;

function max_subarray_of_size_k(arr,k)
{
     let result=0;

     let max=-Infinity;

     for(let i=0;i<k;i++)
     {
        result=result+arr[i];
     }

     if(result > max)
     {
        max=result;
     }

     for(let i=k;i<arr.length;i++)
     {
        
        result=result+arr[i]-arr[i-k];
         if(result > max)
         {
            max=result
         }
     }

     return result;
}

console.log(max_subarray_of_size_k(arr,k))