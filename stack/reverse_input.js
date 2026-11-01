const s="(A+B)*C-D+F";



// function reverseString(s)
// {
//   return s.split('').reverse().join('');
// }

// function reverseString(s)
// {
//     return [...s].reverse().join('');
// }

// function reverseString(s)
// {
//    return Array.from(s).reverse().join('');
// }


// function reverseString(s)
// {
//     let arr=[...s];
//     let left=0;
//     let right=s.length-1;

//     const swapBracket=char=>char==='('?')': char===')' ?'(':char;

//     while(left<=right)
//     {
//         if(left===right)
//         {
//             arr[left]=swapBracket(arr[left]);
//             break;
//         }

//         let temp=swapBracket(arr[left]);
//         arr[left]=swapBracket(arr[right]);
//         arr[right]=temp;
//         left++;
//         right--;
//     }

//     return arr.join('');
// }

function reverseString(s)
{

    return [...s].reverse().map(char=>{
        if(char==='(') return ')'
        if(char===')') return '('
        return char;
    })
    .join('');
}

console.log(reverseString(s));