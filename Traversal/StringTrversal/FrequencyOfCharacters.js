const str="Chandru";
let count={};

for(let char of str)
{
    count[char]=(count[char]+1) || 1;

}

console.log("count==",count)