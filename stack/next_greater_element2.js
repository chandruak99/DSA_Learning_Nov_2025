function nextGreaterElement2(num)
{
    let n=num.length;
     let nge=[];
     let stack=[];


     for(let i=0;i<=(2*n)-1;i++)
     {
        while(stack.length!==0 && stack.at(-1)<=num[i])
        {
            stack.pop();
        }
        if(i<n)
        {
            if(stack.length!==0)
            {
                nge[i]=stack.at(-1);
            }
            else
            {
                nge[i]=-1;
            }
        }
        stack.push(num[i]);
     }
     return nge;
}


let num=[1,3,2,4];
console.log(nextGreaterElement2(num));