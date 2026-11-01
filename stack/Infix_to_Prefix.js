const s="a+b*(c^d-e)^(f+g*h)-i";

function reverseString(s)
{
     return [...s].reverse().map(char=>{
        if(char==='(') return ')'
        if(char===')') return '('
        return char;
    })
    .join('');
}

function infixToPrefix(str)
{
    let s=reverseString(str);
    let n=str.length;
    let ans=""
    let i=0;
    let stack=[];
    let priority={'^':3,'/':2,'*':2,'+':1,'-':1};
    console.log("s==",s)


    while(i<n)
    {
         console.log("s[i]==",s[i])
        if((s[i]>='A' && s[i]<='Z') || (s[i]>='a' && s[i]<='z') || (s[i]>='0' && s[i]<='9'))
        {
            ans=ans+s[i];
        }
        else if(s[i]==='(')
        {
            stack.push(s[i]);
        }
        else if(s[i]===')')
        {
            while(stack.length!==0 && stack.at(-1)!=='(')
            {
                 ans=ans+stack.at(-1);
                 stack.pop();
            }
            stack.pop();
        }
        else {
            if(s[i]==='^')
            {   

                console.log("priority==",priority[s[i]]);

                 console.log("priority==",priority[stack.at(-1)]);
                 while(stack.length!==0 && (priority[s[i]]<=priority[stack.at(-1)]))
                 {
                    ans=ans+stack.at(-1);
                    stack.pop();
                 }
                 stack.push(s[i])
            }
            else
            {
                 while(stack.length!==0 && (priority[s[i]]<priority[stack.at(-1)]))
                 {
                    ans=ans+stack.at(-1);
                    stack.pop();
                 }
                 stack.push(s[i]);
            }
            
        }

        console.log("stack==",stack);
        console.log("ans==",ans)
       
       i++;
       
    }

    
       while(stack.length!==0)
        {
            ans=ans+stack.at(-1);
            stack.pop();
        }
        console.log("ans==",ans)
        return ans=reverseString(ans);

}

console.log(infixToPrefix(s));