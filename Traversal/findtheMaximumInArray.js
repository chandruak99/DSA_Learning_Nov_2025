const arr=[-10,-5,-1,-100,-2];
let max=arr[0];
for(let ele of arr)
{
   if(ele > max)
   {
    max=ele;
   }
}
console.log("max===",max)