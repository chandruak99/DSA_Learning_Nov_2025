

const a="11";
const b="1";


let first=a.length-1;
let sec=b.length-1;
let carry=0;
let result="";
while(first>=0 || sec>=0)
{
    console.log("resultss",result)
      if(sec>=0)
      {
      if(parseInt(a[first])+parseInt(b[sec])===2)
      {
        console.log("222")
        result=result+parseInt(carry+0);
        carry=1;
      }
      else if(a[first]+b[sec]===1)
      {
         result=result+carry+1;
         carry=0;
      }
      else
      {
         result=result+carry+0;
         carry=0;
      }

      first--;
      sec--;
    }
    else
    {
        console.log("else")
        if(a[first]===1)
        {
            result=result+parseInt(carry+1);
            carry=0;
        }
        else
        {
            result=result+carry+0;
            carry=0;
        }
        first--;
    }

}


console.log("result==",result)