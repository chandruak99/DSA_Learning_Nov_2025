const str="Chandru";
let vowels=0;
let constants=0;

for(let char of str.toLowerCase())
{
    if(char==='a' || char==='e' || char==='i' || char==='o' || char==='u')
    {
        vowels++;
    }
    else
    {
        constants++;
    }
}

console.log("vowels==",vowels);
console.log("constants==",constants)