// const arr1=[1,2,3,2,1];
// const arr2=[3,2,2,3,3,2];
// const set=new Set([...arr1,...arr2]);
// console.log(Array.from(set));
// const set1=[...new Set(arr1)];
// const set2=[...new Set(arr2)];

// console.log(set1,set2);

// const merged=[...new Set([...set1,...set2])]
// console.log("merged=",merged)
// function demo()
// {
//     // console.log(Array.from(arguments));
//     console.log([...arguments])

// }
// demo(10,20,30)

// const arrayLike={0:'a',1:'b',length:2}
// {
//     console.log(Array.from(arrayLike));
//     console.log([...arrayLike])
// }



const arr1=[1,2,3,2,1];
const arr2=[3,2,2,3,3,2];

const map={};
const result=[];
for(let ele of arr1)
{
    if(!map[ele])
    {
        map[ele]=true;
        result.push(ele);
    }
}
console.log("result after first==",result)
for(let ele of arr2)
{
    if(!map[ele])
    {
        map[ele]=true;
        result.push(ele);
    }
}

console.log("result==",result)