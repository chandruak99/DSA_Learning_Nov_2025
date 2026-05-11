const arr=[10,20,30,50,10,70,30];


function maxOfMin(arr)
{
    let n=arr.length;
    let left=new Array(n).fill(-1);
    let right=new Array(n).fill(n);
    let stack=[];



    for(let i=0;i<n;i++)
    {
        while(stack.length >0 && arr[stack[stack.length-1]]>=arr[i])
        {
            stack.pop();
        }
        if(stack.length>0)
        {
            left[i]=stack[stack.length-1];
        }
        stack.push(i);
    }
    //  console.log("left==",left);

    stack=[];


    for(let i=n-1;i>=0;i--)
    {
          while(stack.length >0 && arr[stack[stack.length-1]]>=arr[i])
        {
            stack.pop();
        }
        if(stack.length>0)
        {
            right[i]=stack[stack.length-1];
        }
        stack.push(i);
    }

    

    let ans=new Array(n+1).fill(0);

    for(let i=0;i<n;i++)
    {
        let windowSize=right[i]-left[i]-1;
        ans[windowSize]=Math.max(ans[windowSize],arr[i]);
    }

    // console.log("ans==",ans);


    for(let i=n-1;i>0;i--)
    {
        ans[i]=Math.max(ans[i],ans[i+1]);
    }

    return ans.slice(1);
   
}

console.log(maxOfMin(arr));