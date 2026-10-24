



function recursivePermutation(index,str,ans)
{
     if(str.length === index)
     {
         let ds=[];
         for(let i=0;i<str.length;i++)
         {
            ds.push(str[i]);
         }

         ans.push(ds.join(''));
         return;
     }



     for(let i=index;i<str.length;i++)
     {
        swap(index,i,str);
        recursivePermutation(index+1,str,ans);
        swap(index,i,str);
     }

     
}


function swap(i,j,str)
{
    [str[i],str[j]]=[str[j],str[i]];
}

let str="ABC"

let ans=[];

recursivePermutation(0,str,ans)
console.log("ans==",ans)

