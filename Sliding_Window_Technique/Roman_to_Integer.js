const s="MCMXCIV";


function romanToInteger(s)
{
   const romanValue={"I":1,"V":5,"X":10,"L":50,"C":100,"D":500,"M":1000}
   let sum=0;
   for(let i=0;i<s.length;i++)
   {
      if(i>0 && (romanValue[s[i-1]] < romanValue[s[i]]) )
      {
          sum=sum+romanValue[s[i]]-romanValue[s[i-1]]-romanValue[s[i-1]]
      }
      else
      {
        sum=sum+romanValue[s[i]]
      }
   }

   return sum;
}

console.log(romanToInteger(s));