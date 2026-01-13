let a=1
let b=10;

let result=1;
while(b >0)
{
    if(b%2===1)
    {
        result=result*a;
    }
    a=a*a;
    b=Math.floor(b/2);
}

console.log(result)

console.log(Math.pow(1,10))