// const a=[1,2,5,4,0];
// const b=[2,4,5,0,1];
const a=[1,2,5];
const b=[2,4,15];
function checkArrayEqual(a,b){
    let freq=new Map();
   
   for(let i=0;i<a.length;i++)
   {
     freq.set(a[i],(freq.get(a[i])||0)+1);
   }


   for(let i=0;i<b.length;i++)
   {
     if(freq.has(b[i]))
     {
        if(freq.get(b[i])===1)
        {
            freq.delete(b[i]);
        }
        else
        {
            freq.set(b[i],freq.get(b[i])-1);
        }
     }
   }

   if(freq.size===0)
   {
    return true;
   }
   else
   {
     return false;
   }
}

console.log(checkArrayEqual(a,b));