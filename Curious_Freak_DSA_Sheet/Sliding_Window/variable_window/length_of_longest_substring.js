// const s="geeksforgeeks";
const s="wkd"



// function lengthOfLongestSubstring(s)
// {

//    let maxLength=-Infinity;
//    for(let i=0;i<s.length;i++)
//    {
//      for(let j=i+1;j<s.length;j++)
//      {
//             if(isUnique(s,i,j))
//             {
//                 maxLength=Math.max(maxLength,j-i+1);
//             }
//      }
//    }


//    function isUnique(s,start,end)
//    {
//      let seen=new Set();

//      for(let i=start;i<=end;i++)
//      {
//          if(seen.has(s[i])) return false;
//          seen.add(s[i]);
//      }

//      return true;

//    }

//    return maxLength;
// }

// console.log(lengthOfLongestSubstring(s));


function lengthOfLongestSubstring(s)
{
    let set=new Set();
    let left=0;
    let right=0;
    let maxLength= -Infinity;

    while(right<s.length)
    {

        while(set.has(s[right]))
        {
            set.delete(s[left]);
            left++;
        }
        set.add(s[right]);

        let length=right-left+1;
        if(length>maxLength)
        {
            maxLength=length;
        }
        right++;
    }

    return maxLength;
}

console.log(lengthOfLongestSubstring(s));