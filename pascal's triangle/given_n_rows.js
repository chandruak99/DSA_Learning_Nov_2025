const n=5;


function NCr(n,r)
{
    let res=1;
    for(let i=0;i<r;i++)
    {
      res=res * (n-i);
      res=res/(i+1);
    }

    return res;
}

function NthRow(n)
{

    let final=[]
    for(let i=1;i<=n;i++)
    {
        final.push(NCr(n-1,i-1));
    }

    return final;
}

console.log(NthRow(n));