// const arr=[0,-1,2,-3,1];
// const arr=[1,2,3]

const arr=[-5,3,2,-1,0,1];

function findTriplet(arr)
{
  for(let i=0;i<arr.length;i++)
  {
    let left=i+1;
    let right=arr.length-1;

    while(left<right)
    {
        let sum=arr[i]+arr[left]+arr[right];

        if(sum===0)
        {
            return true;
        }
        else if(sum>0)
        {
            right--;
        }
        else
        {
            left++;
        }
    }
  }
  
   return false;
  
}

console.log(findTriplet(arr));