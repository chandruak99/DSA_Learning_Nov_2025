

//bruteforce approach
// function nextGreaterElement(arr)
// {
//     let result=[];

//     for(let i=0;i<arr.length;i++)
//     {
//         let max=-1;
//         for(let j=i+1;j<arr.length;j++)
//         {
//             if(arr[j]>arr[i])
//             {
//                if(arr[j]>max)
//                {
//                  max=arr[j];
//                  break;
//                }
//             }
//         }
//         result.push(max);
//     }
//     return result;
// }


function nextGreaterElement(arr)
{
    let stack=[];
    let result=[];

    for(let i=arr.length-1;i>=0;i--)
    {
        if(stack.length===0)
        {
            result[i]=-1;
            
        }
        else
        {
             
             while(stack.at(-1)<arr[i])
             {
                stack.pop();
             }
            //  result.push(stack.at(-1));
             result[i]=stack.at(-1);
        }
        stack.push(arr[i]);
    }

    return result;
}


let arr=[1,3,2,4]
// let arr=[6,8,0,1,3]
console.log(nextGreaterElement(arr))

