



function printS(index,arr,n,ds,ans,sum,target)
{  

    if(index===n)
    {
        if(sum===target)
        {
            ans.push([...ds]);
            return true;
        }
        else
        {
            return false;
        }
    }


    ds.push(arr[index]);
     sum=sum+arr[index];
    if(printS(index+1,arr,n,ds,ans,sum,target)===true)
    {
        return true;
    }
   
    ds.pop();
    sum=sum-arr[index];

    if(printS(index+1,arr,n,ds,ans,sum,target)===true)
    {
        return true;
    }


    return false;

    
}





let arr=[1,2,1];
let n=arr.length;
let target=2;
let ds=[];
let ans=[];
let sum=0;



printS(0,arr,n,ds,ans,sum,target);

console.log("ans==",ans);