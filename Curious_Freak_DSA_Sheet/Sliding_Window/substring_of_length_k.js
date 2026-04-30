// const s="abcc";
// const k=2;

// const s="aabab";
const s="cesrccxoak"
const k=2;

function substringOfLengthK(s,k)
{
   let count=0;
   let charArr=s.split("");
   let freq=new Map();
   for(let i=0;i<k;i++)
   {
      freq.set(charArr[i],(freq.get(charArr[i])||0)+1);
   }

  
   if(freq.size === k-1)
   {
    count++;
   }
  
    // console.log("count===",count);
    // console.log("freq==",freq)
   
   for(let i=k;i<charArr.length;i++)
   {

      if(freq.get(charArr[i-k]) > 1)
      {
        freq.set(charArr[i-k],(freq.get(charArr[i-k])-1));
      }
      else
      {
        freq.delete(charArr[i-k]);
      }


      freq.set(charArr[i],(freq.get(charArr[i])||0) +1);
      if(freq.size === k-1)
      {
        count++;
      }
   }

   return count;
}

console.log(substringOfLengthK(s,k))