// const s="timetopractice";
// const p="toc";
// const s="zoomlazapzo";
// const p="oza"

const s="lkllkmlmmmkmk";
const p="llmmk";


function smallestWindow(s,p)
{
   let targetFreq=new Array(256).fill(0);
   let windowFreq=new Array(256).fill(0);

   for(let char of p)
   {
      targetFreq[char.charCodeAt(0)]++;
   }


   let required=0;
   let satisfied=0;
   let minLength=Infinity;
   let startIndex=-1;
   let left=0;

   for(let f of targetFreq)
   {
      if(f>0)
      {
         required++;
      }
   }

   // console.log("required==",required)

   for(let right=0;right<s.length;right++)
   {
      let rChar=s.charCodeAt(right);
      windowFreq[rChar]++;

      if(targetFreq[rChar] >0 && windowFreq[rChar] ===targetFreq[rChar])
      {
          satisfied++;
      }


      while(satisfied===required)
      {
         // console.log("right==",right);
         let length=right-left+1;

         if(length<minLength)
         {
            minLength=length;
            console.log("minLength==",minLength);

            startIndex=left;
         }

         let lChar=s.charCodeAt(left);
        
         if(targetFreq[lChar] >0 && windowFreq[lChar]===targetFreq[lChar])
         {
            
             satisfied--;
         }

         windowFreq[lChar]--;
         left++;
      }


      

   }
   // console.log("startIndex==",startIndex)
   // console.log("minLength==",minLength)
   // console.log("finalone",s.substring(startIndex,startIndex+minLength))
   return startIndex ===-1 ?"":s.substring(startIndex,startIndex+minLength);



}

console.log(smallestWindow(s,p));