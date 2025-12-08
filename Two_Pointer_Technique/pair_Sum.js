
//Two Pair
const arr=[1,2,3,4,5];

let left=0;
let right=arr.length-1;
let target=7;


while(left<right)
{

    let sum=arr[left]+arr[right];
    if(sum===target)
     {
        console.log(`(${arr[left]},${arr[right]})`);
        break;

     }
     else if(sum < target)
     {
        left++;
     }
     else{
        right--;
     }

}

