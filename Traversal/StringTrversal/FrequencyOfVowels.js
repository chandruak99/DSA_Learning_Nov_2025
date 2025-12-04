const str="Chandra Mohan";
let vowelFreq={};

for(let char of str.toLowerCase())
{
    if(char === 'a' ||  char==='e' || char === 'i' || char=== 'o' || char ==='u' )
    {
        vowelFreq[char]=(vowelFreq[char]+1) || 1;
    }
    
}

console.log("vowelsFreq==",vowelFreq)
let max=0;
let maxChar=""
for(let key of Object.keys(vowelFreq))
{
    if(vowelFreq[key] > max)
    {
         max=vowelFreq[key];
         maxChar=key;
    }
   

}
console.log("key",maxChar)