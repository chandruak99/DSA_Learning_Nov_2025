


//bruteForce method
// function minReversal(s)
// {

//     if(s.length%2!==0)
//     {
//         return -1;
//     }
//     let minimumCount=Infinity;
    

//     function isBalanced(s)
//     {
//         let count=0;

//         for(let char of s)
//         {
//             if(char==="{")
//             {
//                 count++;
//             }
//             else
//             {
//                 count--;
//             }

//             if(count<0) return false;


//         }

//         return count===0;

        
//     }


//     function backTracking(index,currStr,reversal)
//     {
          
//         if(index===s.length)
//         {

//             if(isBalanced(currStr))
//             {
//                  minimumCount=Math.min(minimumCount,reversal);
//             }

//             return;
//         }



//         backTracking(index+1,currStr+s[index],reversal);
        
//         let flipped=s[index]==="{"?"}":"{";

//         backTracking(index+1,currStr+flipped,reversal+1);



//     }

//     backTracking(0,"",0);

//     return minimumCount===Infinity?-1:minimumCount;
    
// }

// console.log(minReversal("}{"))



//optimzed approach


function minReversal(s)
{
      let open=0;
      let reversal=0;


      for(let char of s)
       {
            if(char==='{')
            {
                open++;
            }
            else
            {
                if(open > 0)
                {
                    open--;
                }
                else
                {
                    reversal++;
                    open++;
                }
            }
       }

       reversal+=Math.floor(open/2);

       return reversal;

}
let s="}{"
console.log(minReversal(s))