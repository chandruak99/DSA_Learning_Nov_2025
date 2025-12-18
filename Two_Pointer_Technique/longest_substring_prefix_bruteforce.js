// const strs=["dog","dot","d"];

// const first=strs[0];
// let final=""
// for(let i=1;i<strs.length;i++)
// {
//     if(i===1)
//     {
//         for(let j=first.length;j>0;j--)
//         {
        
//             if(strs[i].includes(first.slice(0,j)))
//             {
//                  final=first.slice(0,j)
//                  break;
//             }
//         }
//     }
//     else
//     {
//          if(!strs[i].includes(final))
//          {
//             final=""
//          }
//     }
// }

// console.log("final==",final)




// const strs=["dog","dot","d"];
// const strs=["flower","flow","flight"]
const strs=["dog","racecar","car"]

let prefix=strs[0];

function longestPalindrome(strs)
{
for(let i=1;i<strs.length;i++)
{
    while(!strs[i].startsWith(prefix))
    {
        prefix=prefix.slice(0,-1);
        if(prefix==="")
        {
            return ""
        }
    }
}
return prefix;
}

console.log(longestPalindrome(strs))