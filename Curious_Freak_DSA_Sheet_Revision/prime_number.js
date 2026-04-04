const n=7;

//optimized
function primeNumber()
{
    let count=0;
    for(let i=1;i*i<n;i++)
    {
        if(n%i===0)
        {
            count++;
            if(Math.floor(n/i)!==6)
            {
                count++;
            }
        }
    }

    if(count===2)
    {
        return true;
    }
    return false;
}
console.log(primeNumber(n));