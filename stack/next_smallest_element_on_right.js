function nextSmallestElementRight(arr)
{ let stack=[];
  let result=new Array(arr.length).fill(-1);

  for(let i=arr.length-1;i>=0;i--)
  {
    
   
    while(stack.length!==0 && stack.at(-1)>=arr[i])
    {
      
        stack.pop();
    }

   

   
    if(stack.length>0)
    {
        result[i]=stack.at(-1);
    }
    stack.push(arr[i]);
  }
  return result;
}


const arr=[4,8,5,2,25];
console.log(nextSmallestElementRight(arr))