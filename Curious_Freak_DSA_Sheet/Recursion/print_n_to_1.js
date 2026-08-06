

function recursivePrint(i,n)
{
    if(i>n)
    {
        return;
    }
     recursivePrint(i+1,n);
    console.log(i);
    
}
let n=5;
let i=1;
recursivePrint(i,n);