// const arr=[4,2,-3,1,6];
// const arr=[1,2,-1]
const arr=[4,2,0,1,6];




function subarrayWithZeroSum(arr)
{
   
    let prefix=new Map();
    let target=0;
    let currentSum=0;

     for(let i=0;i<arr.length;i++)
     {
        // console.log("arr[i]",arr[i])
        currentSum+=arr[i];
        // console.log("currentSum==",currentSum);
        // console.log("prefix==",prefix)

        if(currentSum===target)
        {
            return true;
        }
         let previous=currentSum-target;
         if(prefix.has(previous))
         {
            return true;
         }

         if(!prefix.has(currentSum))
         {
            prefix.set(currentSum,i)
         }
     }

     return false;
}
console.log(subarrayWithZeroSum(arr))