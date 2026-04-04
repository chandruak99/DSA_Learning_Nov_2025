const arr=[5,4,3,2,1];



function nextPermutation(arr){

   let n=arr.length;
   let index=-1;


 function reverse(arr,newIndex)
 {
   //  console.log("before reverse",arr)
   //  console.log("newIndex==",newIndex)
   //  console.log("n==",n)
    let left=newIndex;
    let right=arr.length-1;
    while(left<right)
    {
        [arr[left],arr[right]]=[arr[right],arr[left]];
        left++;
        right--;
    }

    

   //  console.log("after reverse",arr)

 }


 for(let i=n-2;i>=0;i--)
 {
    if(arr[i]<arr[i+1])
    {
        index=i;
        break;
    }
 }

 console.log("index==",index)

 if(index===-1)
 {
    reverse(arr,0);
    return arr;
 }
 for(let i=n-1;i>=index;i--)
 {
    if(arr[i]>arr[index])
    {
        [arr[i],arr[index]]=[arr[index],arr[i]];
        break;
    }
 }
  

  reverse(arr,index+1);

  return arr;


}

console.log(nextPermutation(arr));