const s="abcc";
const k=2;

function substringOfLengthK(s,k)
{
   let count=0;
   let freq=new Map();
   let charArr=s.split("");

   for(let i=0;i<k;i++)
   {
      freq.set(charArr[i],(freq.get(charArr[i])||0)+1);
   }

    if(freq.size===k-1)
    {
        count++;
    }

    for(let i=k;i<s.length;i++)
    {
        
        if(freq.get(charArr[i-k])>1)
        {
            freq.set(charArr[i-k],(freq.get(charArr[i-k]))-1);
        }
        else
        {
            freq.delete(charArr[i-k]);
        }
        freq.set(charArr[i],(freq.get(charArr[i])||0)+1);

        if(freq.size===k-1)
        {
            count++;
        }
    }

    return count;
}

console.log(substringOfLengthK(s,k))