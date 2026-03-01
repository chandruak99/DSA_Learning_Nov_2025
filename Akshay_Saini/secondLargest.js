const str='dfa12321afd';
let result=[]
for(let ele of str)
{
    if(ele >='0' && ele <='9')
    {
        result.push(Number(ele))
    }
}

let unique=[...new Set([...result])]
unique.sort((a,b)=>a-b);
console.log(unique.length>=2 ?unique[2]:-1)