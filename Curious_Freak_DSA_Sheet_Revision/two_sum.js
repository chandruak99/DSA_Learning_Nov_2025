const arr=[1,2,3,4,5];
const target=5;

function twoSum(arr,target){
     arr.sort((a,b)=>a-b);
     let left=0;
     let right=arr.length-1;

     while(left<right)
     {
        let sum=arr[left]+arr[right];
        if(sum===target)
        {
            return [left,right]
        }
        else if(sum > target){
            right--;
        }
        else
        {
            left++;
        }
     }


     return -1;

}

console.log(twoSum(arr,target))