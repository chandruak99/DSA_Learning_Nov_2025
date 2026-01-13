const arr=[1,3,2,6,-1,4,1,8,2];
const k=5;



// function findAverageOfSubArray(arr,k)
// {
//        let left=0;
//        let right=k;
//        let sum=0;

//        while(left<arr.length && right <=arr.length)
//        {
//             sum=arr.slice(left,right).reduce((acc,ele)=>{return acc+ele},0);
//            console.log("sum",sum,);
//            console.log("average==",sum/k)
//            left++;
//            right++;
//        }
// }


// console.log(findAverageOfSubArray(arr,k));



function findAverageOfSubArray(arr,k)
{
   let windowSum=0;
   let average=0;
   for(let i=0;i<k;i++)
   {
     windowSum=windowSum+arr[i];
   }

   for(let j=k;j<arr.length;j++)
   {
      windowSum=windowSum+arr[j]-arr[j-k];
      average=windowSum/k;
      console.log(average);

   }
}

findAverageOfSubArray(arr,k)