const haystack = "butsad";
const  needle = "sad";




// let n=haystack.length;
// let m=needle.length;
// let final=-1;
// for(let i=0;i<=n-m;i++)
// {
//     if(haystack.slice(i,i+m)===needle)
//     {
//         console.log("Found",i);
//         final=i;
//     }
    
// }

// if(final===-1)
// {
//   console.log(final)
// }





// function checkOccurance(haystack,needle)
// {
//     for(let i=0;i<=haystack.length;i++)
//     {
//         for(let j=i+1;j<=haystack.length;j++)
//         {
            
//             if(haystack.slice(i,j)===needle)
//             {
                
//                 return i;
//             }
//         }
//     }

//     return -1;
// }


// console.log(checkOccurance(haystack,needle))





//Two Pointer Technique

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    // if(haystack.includes(needle))
    //     {
    //         for(let j=1;j<haytsack.length;j++)
    //         {
    //             if(haystack.slice(0,j)===needle)
    //             {
    //                 return 
    //             }
    //         }
    //     }
    //     else
    //     {
    //         return -1;
    //     }
    let n=haystack.length;
    let m=needle.length;


    for(let i=0;i<=n-m;i++)
    {
        let j=0;
        while(j<m && (haystack[i+j] === needle[j]))
        {
            // console.log(haystack[i+j],needle[j])
            j++;
        }
        // console.log(j)
        if(j===m)
        {   
            // console.log("i==",i)
              return i; 
        }
    }

    return -1;
};
