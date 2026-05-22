const s="10212";



function smallestWindow(s)
{

 let last0=-1;
 let last1=-1;
 let last2=-1;

 let minLength=Infinity;

 for(let i=0;i<s.length;i++)
 {
     if(s[i]==='0')
     {
        last0=i;
     }
     if(s[i]==='1')
     {
        last1=i;
     }
     if(s[i]==='2')
     {
        last2=i;
     }

     if(last0!==-1 && last1!==-1 && last2!==-1)
     {
        // console.log(i)
         minLength=Math.min(minLength,i-Math.min(last0,last1,last2)+1);
     }
 }
   return minLength;
}

console.log(smallestWindow(s));