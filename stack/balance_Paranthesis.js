function balance_Paranthesis(s)
{  
      let stack=[];
      let map={
        ')':'(',
        '}':'{',
        ']':'['
      }
      for(const char of s)
      {
          console.log("stack==",stack)
          if(char==='(' || char==='{' || char==='[')
          {
             stack.push(char);
          }
          else{
             if(stack.pop()!==map[char])
             {
                return false;
             }
          }
          
      } 

      if(stack.length===0)
      {
        return true;
      }
      else{
        return false;
      }
}

let s="[{()}]"

console.log(balance_Paranthesis(s))