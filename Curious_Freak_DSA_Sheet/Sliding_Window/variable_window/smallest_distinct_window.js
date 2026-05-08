// const str="aabcbcdbca";
// const str="aaab";s
const str="geeksforgeeks"


function smallestDistinctWindow(str)
{
   
    let charArr=str.split("");


    let i=0;
    let j=0;
    let minLength=charArr.length;
    let set=new Set(charArr);
    const n=set.size;
    let map=new Map();

    while(i<charArr.length)
    {
       map.set(charArr[i],(map.get(charArr[i])||0)+1);
       
       if(map.size===n)
       {
          while(map.get(charArr[j])>1)
          {
            map.set(charArr[j],(map.get(charArr[j]))-1);
            j++;
          }

          minLength=Math.min(minLength,i-j+1);
       }
       i++;

    }

    return minLength;
}

console.log(smallestDistinctWindow(str));