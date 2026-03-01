// let str="Chandru";
// let charArr=str.split("");

// let left=0;
// let right=str.length-1;
// while(left<right)
// {
//     [charArr[left],charArr[right]]=[charArr[right],charArr[left]];
//     left++;
//     right--;
// }
// let reverse=charArr.join("")
// console.log(reverse);


// let str="Chandru";

// str[1]="l";
// console.log(str)

// let str="Chandru";
// let reverse=str.split("").reverse().join("");
// console.log("reverse",reverse)

let str="malayalam";


function palindrome(str)
{
let n=Math.floor(str.length/2);
for(let i=0;i<n;i++)
{
    if(str[i]!==str[str.length-1-i])
    {
        return false;
    }
}
return true;
}

console.log(palindrome("chandru"))




