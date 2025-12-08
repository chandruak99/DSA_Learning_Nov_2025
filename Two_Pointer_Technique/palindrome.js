const str="malayalam";
let left=0;
let right=str.length-1;
let palindrome=true;
while(left<right)
{
    if(str[left]!==str[right])
    {
        palindrome=false;
        break;
    }
    left++;
    right--;
}

console.log(palindrome)

