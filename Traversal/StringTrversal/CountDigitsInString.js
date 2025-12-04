const str="Chandru123";
let digitsCount=0;
let numbers=0;

for(let char of str.toLowerCase())
{
    if(char >='a' && char <='z')
    {
        console.log("Character",char);
        digitsCount++;
    }
    else if(char>='0' && char<='9'){
        console.log("number",char)
        numbers++;
    }
}

console.log("digitsCount==",digitsCount);
console.log("numberCount",numbers)