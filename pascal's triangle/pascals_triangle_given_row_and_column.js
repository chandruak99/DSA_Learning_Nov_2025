let r=5
let c=3;


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



console.log(NCr(r-1,c-1));
