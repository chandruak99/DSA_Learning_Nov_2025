const n=5;


function factorialRecursion(n)
{
    if(n===0)
    {
        return 1;
    }

    return n * factorialRecursion(n-1);
}


console.log(factorialRecursion(n))