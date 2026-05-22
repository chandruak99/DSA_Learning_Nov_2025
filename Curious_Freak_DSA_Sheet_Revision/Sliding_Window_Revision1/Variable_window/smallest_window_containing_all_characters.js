const s="timetopractice";
const p="toc";


function smallestWindow(s,p)
{
   let targetFreq=new Array(256).fill(0);
   let windowFreq=new Array(256).fill(0);

   let left=0;
   let required=0;
   let satisfied=0;
   let minLength=Infinity;
   let startIndex=-1;
   for(let i=0;i<p.length;i++)
   {
     targetFreq[p[i].charCodeAt(0)]++;
   }

   for(let f of targetFreq)
   {
    if(f>0)
    {
        required++;
    }
   }
   for(let i=0;i<s.length;i++)
   {
     let rchar=s.charCodeAt(right);

     windowFreq[rchar]++;

     if(targetFreq[rchar]>0 && windowFreq[rchar]===targetFreq[rchar])
     {
        satisfied++;
     }

     while(required===satisfied)
     {
          minLength=Math.min(minLength,i-left+1);
        
        let leftChar=s[left].charCodeAt(0);
         
        if(targetFreq[leftChar]>0 && windowFreq[leftChar]===windowFreq[leftChar])
        {
            satisfied--;
        }
        windowFreq[leftChar]--;
        left++;
     }


   }


   return minLength===Infinity?"": s.substring(startIndex,startIndex+minLength);
}

console.log(smallestWindow(s,p))