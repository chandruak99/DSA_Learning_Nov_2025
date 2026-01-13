const word="luffy is still joyboy";
// const strArr=word.trim("").split(" ");
// console.log(strArr[strArr.length-1].length);




let left=0;
let lastWordCount=0;

for(let i=0;i<word.length;i++)
{
    if(word[i]!==" ")
    {
        left++;
        lastWordCount=left;
    }
    else
    {
       
        left=0;
    }
}

console.log(lastWordCount)