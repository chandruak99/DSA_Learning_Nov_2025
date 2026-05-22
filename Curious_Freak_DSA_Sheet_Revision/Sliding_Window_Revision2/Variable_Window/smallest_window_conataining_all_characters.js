const s="timetopractise";
const t="toc";



function smallestWindow(s,p)
{
   let required=0;
   let satisfied=0;
   let left=0;
   let targetFreq=new Array(256).fill(0);
   let windowFreq=new Array(256).fill(0);
   let minLength=Infinity;
   let startIndex=-1;

   for(let char of p)
   {
    targetFreq[char.charCodeAt(0)]++;
   }
   
   for(let f of targetFreq)
   {
    if(f>0)
    {
        required++;
    }
   }


   for(let right=0;right<s.length;right++)
   {
      let rChar=s.charCodeAt(right);
      windowFreq[rChar]++;

      if(windowFreq[rChar]===targetFreq[rChar])
      {
        satisfied++;
      }
      
      while(satisfied===required)
      {

        if(right-left+1<minLength)
        {
          minLength=right-left+1;
          startIndex=left;
        }
        

        
        let lChar=s.charCodeAt(left);
        

        if(windowFreq[lChar]===targetFreq[lChar])
        {
            satisfied--;
        }

        windowFreq[lChar]--;
        left++;

         
      }
   }
   return minLength===Infinity ? "" : s.substring(startIndex,startIndex+minLength)
}

console.log(smallestWindow(s,t));