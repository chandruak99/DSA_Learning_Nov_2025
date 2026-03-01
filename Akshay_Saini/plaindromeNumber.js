let n=10;

function palindrome(n)
{
let num=n;
let reverse=0;
while(num>0)
{
    reverse=reverse*10+(num%10);
    num=Math.floor(num/10)
}
return n===reverse ? true: false;
}


console.log(palindrome(n))