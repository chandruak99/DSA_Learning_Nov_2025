// const a=[11,7,1,13,21,3,7,3];
// const b=[11,3,7,1,7];

const a=[10, 5, 2, 23, 19];
const b=[19, 5, 3]


function arraySubset(a,b){
    let freq=new Map();

    for(let i=0;i<b.length;i++)
    {
        freq.set(b[i],(freq.get(b[i])||0)+1);
    }

    console.log("freq==",freq)


    for(let i=0;i<a.length;i++)
    {
        if(freq.has(a[i]))
        {
            if(freq.get(a[i])===1)
            {
                freq.delete(a[i]);
            }
            else
            {
                freq.set(a[i],freq.get(a[i])-1)
            }
        }
    }
    console.log(freq)
    if(freq.size===0)
    {
        return true;
    }
    else
    {
        return false;
    }

}

console.log(arraySubset(a,b));