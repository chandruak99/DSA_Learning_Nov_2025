const s="forxxorfxdofr";
const p="for"


function countOccurencesOfAnagram(s,p)
{

   let k=p.length;
        let n=s.length;
        if (k > n) return 0;
    
    let pArray=new Array(26).fill(0);
    let windowArr=new Array(26).fill(0);
    let count=0;

    const getIdx=(char)=>char.charCodeAt(0)-'a'.charCodeAt(0);

    function checkEquality()
    {
        let equal=true;
        for(let i=0;i<26;i++)
        {
            if(pArray[i]!==windowArr[i])
            {
                return false;
            }
        }
        return true;
    }

    for(let i=0;i<k;i++)
    {
        pArray[getIdx(p[i])]++;
        windowArr[getIdx(s[i])]++;

    }

    if(checkEquality())
    {
        count++;
    }


    for(let i=k;i<s.length;i++)
    {
        
        windowArr[getIdx(s[i])]++;
        windowArr[getIdx(s[i-k])]--;

        
        if(checkEquality())
        {
            count++;
        }

    }

    return count;
}

console.log(countOccurencesOfAnagram(s,p))