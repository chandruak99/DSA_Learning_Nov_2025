// const arr=[1,5,3,2];
const arr=[2,3,4]


function countTripelet(arr){
    
   arr.sort((a,b)=>a-b);
   let count=0;

   for(let k=arr.length-1;k>1;k--)
   {
       let c=arr[k];
       let left=0;
       let right=k-1;
     
    //    console.log("c==",c)
    //    console.log("sum==",sum)

       while(left<right)
       {
        let sum=arr[left]+arr[right];
        if(sum===c)
        {
            count++;
            left++;
            right--;
        }
        else if(sum<c)
        {
            left++;
        }
        else
        {
            right--
        }
       }
   }


   return count;
}

console.log(countTripelet(arr))

