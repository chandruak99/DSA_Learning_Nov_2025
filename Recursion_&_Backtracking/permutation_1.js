const s="ABC";


function recursiveOccurance(s,ds,freq,ans)
{
    if(ds.length===s.length)
    {
        ans.push(ds.join(""));
        return;
    }

    for(let i=0;i<s.length;i++)
    {
        if(!freq[i])
        {
            ds.push(s[i]);
            freq[i]=true;
            console.log("i==",i)
            console.log("ds=",ds)
            recursiveOccurance(s,ds,freq,ans);
            ds.pop();
            freq[i]=false;
        }
    }
}



function permutation(s)
{
    let ans=[];
    let ds=[];
    let freq=new Array(s.length).fill(false);

    recursiveOccurance(s,ds,freq,ans);

    return [...new Set(ans)]


}


console.log(permutation(s));