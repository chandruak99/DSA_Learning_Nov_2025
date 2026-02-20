const a=[89, 24, 75, 11, 23];
const b=[89, 2, 4];



const set1=new Set(a);
const result=[];

for(let ele of b)
{
    if(set1.has(ele))
    {
       result.push(ele);
    }

}


console.log(result)