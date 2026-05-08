const str="001";

// const str="12121"


// console.log(str.includes("3"));


//bruteforce
// function smallestWindow12(str)
// {
//     let exist=true;
//     let checkList=new Set(["0","1","2"]);

//     for(let list of checkList)
//     {
//         if(!str.includes(list))
//         {
//             exist=false;
//         }
        
//     }

//     if(exist)
//     {
//         let freq=new Map();

//         let minLength=str.length;
//         let charArr=str.split("");
        
//         let i=0;
//         let j=0;
//         while(i<charArr.length)
//         {
//             freq.set(charArr[i],(freq.get(charArr[i])||0)+1);

//             if(freq.size===checkList.size)
//             {
//                 while(freq.get(charArr[j])>1)
//                 {
//                     freq.set(charArr[j],freq.get(charArr[j])-1);
//                     j++;
//                 }

//                 minLength=Math.min(minLength,i-j+1);
//             }
//             i++;
//         }
//         return minLength;

//     }
//     else
//     {
//         return -1;
//     }


// }

//optimized


function smallestWindow12(str)
{
    let charArr=str.split("");
    let last0=-1;
    let last1=-1;
    let last2=-1;
    let minLength=Infinity;

    for(let i=0;i<charArr.length;i++)
    {
          if(charArr[i]==='0'){
            last0=i;
          }
          if(charArr[i]==='1'){
            last1=i;
          }

          if(charArr[i]==='2')
          {
            last2=i;
          }

          if(last0!==-1 && last1!==-1 && last2!==-1)
          {
              minLength=Math.min(minLength,(i-Math.min(last0,last1,last2))+1);
          }

    }

    return minLength===-Infinity ? -1: minLength;
}

console.log(smallestWindow12(str));