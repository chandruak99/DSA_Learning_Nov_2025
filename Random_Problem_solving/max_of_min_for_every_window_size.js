const arr=[10, 20, 30, 50, 10, 70, 30];


function maxOfMin(arr)
{
   let n=arr.length;
   let left=new Array(n).fill(-1);
   let right=new Array(n).fill(n);
   let stack=[];
   for(let i=0;i<arr.length;i++)
   {
      while(stack.length >0 && arr[stack[stack.length-1]] >=arr[i])
      {
        stack.pop();
      }
      

      if(stack.length >0)
      {
        left[i]=stack[stack.length-1];
      }
      stack.push(i);
   }

    stack=[];

    for(let i=n-1;i>=0;i--)
    {
          while(stack.length >0 && arr[stack[stack.length-1]] >=arr[i])
          {
                stack.pop();
          }
          if(stack.length >0)
          {
                right[i]=stack[stack.length-1];
          }
          stack.push(i);
          
    }

    console.log("right==",right)



    let result=new Array(n+1).fill(0);

    for(let i=0;i<n;i++)
    {
        let windowSize=right[i]-left[i]-1;
        console.log("windowSize==",windowSize)
        result[windowSize]=Math.max(result[windowSize],arr[i])
    }
    // console.log("result==",result)

    for(let i=n-1;i>=0;i--)
    {
        result[i]=Math.max(result[i],result[i+1]);
    }
    return result.slice(1);


}

console.log(maxOfMin(arr));