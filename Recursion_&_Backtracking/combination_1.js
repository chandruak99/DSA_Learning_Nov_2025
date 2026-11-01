const arr=[1,2,3];
const target=5;


function recursivePermutation(index,arr,target,ds,ans)
{
    if(index===arr.length)
    {
        if(target===0)
        {
            ans.push([...ds]);
             
        }
       return;
    }

   
    if(arr[index]<=target)
    {
       ds.push(arr[index]);
       recursivePermutation(index,arr,target-arr[index],ds,ans);
       ds.pop();
    }

     recursivePermutation(index + 1,arr,target,ds,ans);


}



function combinationI(arr,target)
{
   let ans=[];
   let ds=[];
   recursivePermutation(0,arr,target,ds,ans);
   return ans;

}


console.log(combinationI(arr,target));