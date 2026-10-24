



function recursiveNamePrint(i,n)
{
   if(i===n)
   {
    return;
   }

   console.log("Chandru");
   recursiveNamePrint(i+1,n);
}

let n=3;
let i=0;
recursiveNamePrint(i,n)