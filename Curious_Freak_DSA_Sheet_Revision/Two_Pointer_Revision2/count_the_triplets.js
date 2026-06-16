const arr=[1,5,3,2];

function countTriplets(arr)
{
      
   arr.sort((a,b)=>b-a);
   
   let count=0;

   for(let i=0;i<arr.length-2;i++)
   {
       let low=i+1;
       let high=arr.length-1;
       let c=arr[i];
       


       while(low<high)
       {

          console.log("low==",low);
          console.log("high==",high)
          let sum=arr[low]+arr[high];
          if(sum===c)
          {
            count++;
          }
          else if(sum>c)
          {
            low++;
          }
          else
          {
            high--;
          }
       }
   }

   return count;
}
console.log(countTriplets(arr));