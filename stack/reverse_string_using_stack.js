function reverseStringUsingStack(str)
{
    let stack=[];
    let reverseString=""

    for(let i=0;i<str.length;i++)
    {
        stack.push(str[i]);
    }

    let i=0;

    while(stack.length!==0)
    {
        reverseString+=stack.pop();
    }
    
    return reverseString;
}


const str="chandru";
console.log(reverseStringUsingStack(str))