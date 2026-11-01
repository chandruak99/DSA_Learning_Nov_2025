const n=10;



function recursion(n,ans)
{


    if(n<=0)
    {
        ans.push(n);
        return n;
    }


    ans.push(n);
    recursion(n-5,ans);
    ans.push(n);
}


function pattern(n)
{
  let ans=[];

  recursion(n,ans);


  return ans;

}

console.log(pattern(n));