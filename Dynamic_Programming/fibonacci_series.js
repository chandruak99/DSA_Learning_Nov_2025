
function fiboSeries(n,memo)
{
   if(n in memo)
   {
    return memo[n];
   }
   
   if(n<=1)
   {
    return n;
   }

   memo[n]=fiboSeries(n-1,memo)+fiboSeries(n-2,memo);
   return memo[n];


 
}



let memo=new Map();
console.log(fiboSeries(7,memo))