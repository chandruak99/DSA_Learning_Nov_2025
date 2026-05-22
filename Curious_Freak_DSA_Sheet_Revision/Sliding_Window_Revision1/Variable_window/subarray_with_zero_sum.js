// const arr=[1,2,-1];




function subarrayWithzeroSum(arr)
{
   let currentSum=0;
   let prefix=new Map();
   let target=0;

   for(let i=0;i<arr.length;i++)
   {
      currentSum+=arr[i];

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
        prefix.set(currentSum,i);
      }
   }
   return false;
}
console.log(subarrayWithzeroSum(arr));