// const arr=[1,2,3,7,5];
// const target=12;

// const arr=[5,3,4];
// const target=2;

const arr=[1,2,3,4,5,6,7,8,9,10];

const target=15;
function indexes_Of_Subarray_Sum(arr,target)
{
   let low=0;
   let high=0;

   let sum=0

   while(low<=high && high <arr.length)
   {
      sum=sum+arr[high];
      console.log("sum==",sum)
      while(sum>target)
        {
             sum=sum-arr[low];
             low++;
        }

      if(sum===target)
      {
        return [low+1,high+1];
      }

      high++;
   }

   return [-1];
}


console.log(indexes_Of_Subarray_Sum(arr,target))