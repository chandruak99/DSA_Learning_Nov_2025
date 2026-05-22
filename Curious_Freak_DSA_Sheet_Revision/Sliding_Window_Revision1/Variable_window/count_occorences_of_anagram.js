const txt="forxxorfxdofr";
const p="for";


function countOccurences(s,p)
{
   let windowFreq=new Array(26).fill(0);
   let targetFreq=new  Array(26).fill(0);
   let k=p.length;
   let count=0;
   
   const getIdx=(char)=>char.charCodeAt(0)-'a'.charCodeAt(0);


   const checkEqual=()=>{

       for(let i=0;i<26;i++)
       {
          if(windowFreq[i]!==targetFreq[i])
          {
            return false;
          }
       }
       return true;
   }

   for(let i=0;i<k;i++)
   {
     targetFreq[getIdx(p[i])]++;
     windowFreq[getIdx(s[i])]++;
   }
   
   if(checkEqual())
   {
      count++;
   }

//    console.log("targetFreq==",targetFreq);
//    console.log("windowFreq==",windowFreq)
   for(let i=k;i<s.length;i++)
   {
      windowFreq[getIdx(s[i])]++;
      windowFreq[getIdx(s[i-k])]--;


      if(checkEqual())
      {
        count++;
      }
   }


    return count;

}

console.log(countOccurences(txt,p))