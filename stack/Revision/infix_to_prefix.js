function reverseString(s)
{
     return [...s].reverse().map(char=>
     {
        if(char==="(") return ")" 
        else if(char===')') return "("
        else return char;
     }
     ).join("");
}


function infixToPrefix(s)
{
    let s1=reverseString(s);
    console.log("s1==",s1)
    let stack=[];
    let ans="";
   
    const priority={'^':3,'/':2,'*':2,'+':1,'-':1}

    for(let i=0;i<s1.length;i++)
    {
        if((s1[i]>='A' && s1[i]<='Z') || (s1[i]>='a' && s1[i]<='z') || (s1[i]>='0' && s1[i]<='9'))
        {
            ans=ans+s1[i];
        }
        else if(s1[i]==='(')
        {
            stack.push(s1[i]);
        }
        else if(s1[i]===')')
        {
            while(stack.length!==0 && stack.at(-1)!=='(')
            {
                ans=ans+stack.at(-1);
                stack.pop();
            }
            stack.pop();
        }
        else
        { 
            console.log("s[i]==",s1[i]);
            while(stack.length!==0 && ((s1[i]!=='^' && (priority[s1[i]]<=priority[stack.at(-1)])) || (s1[i]==='^' && (priority[s1[i]]<priority[stack.at(-1)]))))
            { 
                console.log("true")
                ans=ans+stack.at(-1);
                stack.pop();
            }
            stack.push(s1[i]);
        }
        console.log("stack==",stack);
        console.log("ans==",ans)
       
    }
     
    while(stack.length!==0)
    {
        ans=ans+stack.at(-1);
        stack.pop();
    }
    console.log("ans==",ans)
    let s2=reverseString(ans);
    return s2;
}


const s="a+b*(c^d-e)^(f+g*h)-i";


console.log(infixToPrefix(s));