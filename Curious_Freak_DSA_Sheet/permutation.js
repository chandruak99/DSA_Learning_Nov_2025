const arr=[1,2,3];


//bruteforce method
// function recursive(arr,ds,ans,freq)
// {
//       if(ds.length===arr.length)
//       {
//         ans.push([...ds]);
//         return;
//       }
      
//       for(let i=0;i<arr.length;i++)
//       {
//          if(!freq[i])
//          {
//             ds.push(arr[i]);
//             freq[i]=1;
//             recursive(arr,ds,ans,freq);
//             freq[i]=0;
//             ds.pop(arr[i]);
//          }
//       }
// }

// function permute(arr)
// {
//     const ans=[];
//     const ds=[];
//     const freq=new Array(arr.length).fill(0);
//     recursive(arr,ds,ans,freq);
//     return ans;
// }

function recursive(arr,ans,index)
{
   if(arr.length===index)
   {
     ans.push([...arr]);
     return ans;
   }

   for(let i=index;i<arr.length;i++)
   {
     [arr[i],arr[index]]=[arr[index],arr[i]];
     recursive(arr,ans,index+1);
     [arr[i],arr[index]]=[arr[index],arr[i]];
   }
}

function permute(arr)
{
    const ans=[];
    recursive(arr,ans,0);
    
    const uniqueSorted=[...new Set(ans.map((a)=>a.join(',')))].sort().map((p)=>p.split(',').map(Number));
    console.log("uniqueSorted==",uniqueSorted)
    const currentNumber=arr.join(',');
    const currentIndex=uniqueSorted.findIndex((p)=>p.join(',')===currentNumber);
    console.log("currentIndex==",currentIndex)
    return uniqueSorted[currentIndex+1]
}

console.log(permute(arr));