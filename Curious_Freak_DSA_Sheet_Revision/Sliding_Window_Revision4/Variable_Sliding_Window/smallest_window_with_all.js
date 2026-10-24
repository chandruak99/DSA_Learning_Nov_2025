
const s="timetopractice";

const p="toc";
function minWindow(s, p) {
        
         
       let targetFreq=new Array(256).fill(0);
       
       let windowFreq=new Array(256).fill(0);
       let required=0;
       let satisfied=0;
       let left=0;
       let minLength=Infinity;
       let startIndex=0;
       
       for(let char of p)
       {
           targetFreq[char.charCodeAt(0)]++;
       }

    //    console.log("targetFreq==",targetFreq)
       
       
       for(let f of targetFreq)
       {
           if(f > 0)
           {
               required++;
           }
       }



    //    console.log("required==",required)
       
       
       for(let right=0;right<s.length;right++)
       {
           
           
           let rChar=s.charCodeAt(right);
           
           
           windowFreq[rChar]++;
           
           if(windowFreq[rChar]===targetFreq[rChar])
           {
               satisfied++;
           }



           console.log("satified==",satisfied)
           console.log("right==",right);
           


           
           
           while(satisfied===required) 
           {
                   console.log("inside while")
                
               
                  
                   
                   if((right-left+1)<minLength)
                   {
                     minLength=right-left+1;
                     startIndex=left;
                   }
                   
                   let leftChar=s.charCodeAt(left);
                  
                   if(windowFreq[leftChar]===targetFreq[leftChar])
                   {
                       satisfied--;
                   }
                   
                   windowFreq[leftChar]--;
                   left++;
               
                    
               
           }
            
           
       }
       
      
        console.log("minLength",minLength)
        return minLength === Infinity ?"": s.slice(startIndex,startIndex+minLength);
       
}

console.log(minWindow(s,p));