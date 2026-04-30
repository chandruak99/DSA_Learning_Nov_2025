// const s="abcc";
// const k=2;

const s="aabab";
const k=3;


function countSubstring(s,k)
{
   let charArr=s.split("");

   let freq=new Map();
   let count=0;

   for(let i=0;i<k;i++)
   {
     freq.set(charArr[i],(freq.get(charArr[i])|| 0)+1);
   }
    if(freq.size===k-1)
    {
        count++;
    }

    for(let i=k;i<charArr.length;i++)
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

console.log(countSubstring(s,k))