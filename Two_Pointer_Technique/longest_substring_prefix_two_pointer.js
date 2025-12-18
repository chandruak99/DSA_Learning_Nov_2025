const strs=["flower","flow","flight"];

strs.sort(); 
let first=strs[0];

let last=strs[strs.length-1];

let i=0;

while(i<first.length && i< last.length && first[i]===last[i])
{
    i++;
}

console.log("first==",first.slice(0,i))