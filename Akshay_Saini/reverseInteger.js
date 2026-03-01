// let x=-123;

// function reveseInteger(num)
// {
//    let str=String(num);
//    let reverse=str.split("").reverse().join("");
//    console.log("reverse==",Number(reverse))
//    return reverse;
// }

// console.log(reveseInteger(x))

let n=123
function palindrome(n)
{
let num=n;
let reverse=0;
while(num>0)
{
    reverse=reverse*10+(num%10);
    num=Math.floor(num/10)
}

return reverse;
}
console.log(palindrome(n))