const n=7;

//optimized
// function primeNumber()
// {
//     let count=0;
//     for(let i=1;i*i<n;i++)
//     {
//         if(n%i===0)
//         {
//             count++;
//             if(Math.floor(n/i)!==6)
//             {
//                 count++;
//             }
//         }
//     }

//     if(count===2)
//     {
//         return true;
//     }
//     return false;
// }
// console.log(primeNumber(n));


//using sieve
function primeUsingSieve(n)
{
    const prime_Number=[];
    const isPrime=new Array(n+1).fill(true);

    isPrime[0]=false;
    isPrime[1]=false;

    // console.log("isPrime==",isPrime)

        for(let i=2;i*i<=n;i++)
        {
            if(isPrime[i])
                {
                    for(let j=i*i;j<=n;j=j+i)
                    {
                        isPrime[j]=false;
                    }
                }
            
        }
      
   

   for(let i=2;i<=n;i++)
   {
     if(isPrime[i])
     {
        prime_Number.push(i);
     }
   }
   return prime_Number;
}


console.log(primeUsingSieve(35));



