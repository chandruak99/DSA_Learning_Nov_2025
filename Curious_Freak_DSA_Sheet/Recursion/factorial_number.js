


function factorial(n)
{
    if(n===0)
    {
        return 0;
    }

    return n+factorial(n-1);
}

let n=3;
let sum=factorial(n);

console.log("sum==",sum)