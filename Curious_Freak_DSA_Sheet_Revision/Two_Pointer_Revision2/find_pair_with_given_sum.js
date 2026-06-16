//using set Approach

const arr=[0,-1,2,-3,1];

const target=-2;
// function findPair(arr,target)
// {
//      let set=new Set();

//      for(let i=0;i<arr.length;i++)
//      {
//          let compliment=target-arr[i];
//          if(set.has(compliment))
//          {
//              return true;
//          }
//          set.add(arr[i]);
//      }

//      return false;
// }

// console.log(findPair(arr,target));

//using two pointer approach

function findPair(arr,target)
{
   let low=0;
   let high=arr.length-1;
   arr.sort((a,b)=>a-b);
   
   while(low<high)
   {
       let sum=arr[low]+arr[high];
       if(sum===target)
       {
         return true;
       }
       else if(sum>target)
       {
         high--;
       }
       else
       {
          low++;
       }
   }

   return false;
}

console.log(findPair(arr,target))
