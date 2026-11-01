




const s='a*(b+c)/d'

function infixToPostFix(s)
{
    let stack=[];
    let n=s.length;
    let ans=""
    let i=0;
    const priority={'^':3,'/':2,'*':2,'+':1,'-':1}
    while(i<n)
    {

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
        else
        {
             
             while(stack.length!==0 && (s[i]!=='^' &&priority[s[i]]<=priority[stack.at(-1)]) || (s[i]==='^' &&priority[s[i]]<priority[stack.at(-1)]))
             {
                ans=ans+stack.at(-1);
                stack.pop();
             }
             stack.push(s[i])
        }
        
        

        i++;
    }

    while(stack.length!==0)
    {
        ans=ans+stack.at(-1);
        stack.pop();
    }

    return ans;
}


console.log(infixToPostFix(s));