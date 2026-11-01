

function largestRectangleHistogram(arr)
{
   let maxArea=-Infinity;
   for(let i=0;i<arr.length;i++)
   {
       let minHeight=arr[i];
      for(let j=i;j<arr.length;j++)
      {
            minHeight=Math.min(minHeight,arr[j]);
            let width=j-i+1;

            let area=minHeight*width;

            maxArea=Math.max(maxArea,area);
      }
   }

   return maxArea;
}

const arr=[60,20,50,40,10,50,60];
console.log(largestRectangleHistogram(arr));