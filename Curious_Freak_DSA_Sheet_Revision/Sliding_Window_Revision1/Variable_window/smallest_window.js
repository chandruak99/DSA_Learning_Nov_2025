const str="aabcbcdbca";


function smallestWindow(str)
{
   let charArr=str.split("");

  
   let set=new Set(charArr);
   let freq=new Map();

    let j=0;
    let i=0;
    let minLength=charArr.length;

    while(i<charArr.length)
    {

        freq.set(charArr[i],(freq.get(charArr[i])||0)+1);
        if(freq.size===set.size)
        {

            while(freq.get(charArr[j])>1)
            {
                 freq.set(charArr[j],freq.get(charArr[j])-1);
                 j++;
            }
            minLength=Math.min(minLength,i-j+1);
        }
       
        i++;
    }

     return minLength;
   
   
}

console.log(smallestWindow(str));