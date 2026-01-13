const str="()[]{}"
// const str="(]";
// const str="([])";
// const str="([)]"
// const par={
//     ")":"(",
//     "]":"[",
//     "}":"{"
// }

// const map=new Map()

// for(let ele of str)
// {
//     // console.log(par[ele])
//     if(map.has(par[ele]))
//     {
//          map.delete(par[ele])
//     }
//     else
//     {
//         map.set(ele);
//     }
//     // console.log(map)
// }

// console.log("map==",map.size)
// const str="([])"


function validParathesis(str)
{
const par={
    ")":"(",
    "]":"[",
    "}":"{"
}
const stack=[];
for(const ele of str)
{
    if(par[ele])
    {
        const top=stack.pop();
        if(top!==par[ele]) return false;
    }
    else
    {
        stack.push(ele)
    }
}

if(stack.length===0)
{
    return true;
}
else
{
    return false;
}
}
console.log(validParathesis(str))



