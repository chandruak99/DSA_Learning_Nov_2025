//one way is we can do it through Set
const arr=[1,2,3,4,2];


const map=new Map();

for(let ele of arr)
{

    if(!map.has(ele))
    {
        map.set(ele,ele);
    }
    
}

console.log([...map.keys()])


