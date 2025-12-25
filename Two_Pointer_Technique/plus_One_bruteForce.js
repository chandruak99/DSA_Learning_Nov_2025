
//brute force
// const digits=[1,2,3];

// let str=""
// for(let i=0;i<digits.length;i++)
// {
//     str=str+digits[i];
// }

// let strComb=parseInt(str)+1;
// let conStr=strComb.toString().split("").map(Number);
// // console.log("strComb==",strComb+1)

// console.log("conStr",conStr)

// let res=

//Two Pointer technique

const digits=[9,9,9];




function plusOne(digits)
{
let low=0;
let high=digits.length-1;
    while(low<=high)
    {
        if(digits[high]<9)
        {
            digits[high]++;
            return digits;
        }
        else
        {
            digits[high]=0;
            high--;
        }
    }
    digits.unshift(1);
    return digits;
}


console.log(plusOne(digits))
