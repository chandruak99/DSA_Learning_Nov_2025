    
    //bruteForce
    // const arr=[1,2,3,5];


    // function missingArray(arr)
    // {
    // let n=arr[arr.length-1];
    // //    console.log("n==",n)

    // for(let i=1;i<=n;i++)
    // {
    //     let flag=false;
    //     for(let j=0;j<arr.length;j++)
    //     {

            
    //         if(i===arr[j])
    //         {
    //             flag=true;
    //             break;
    //         }
        
    //     }

    //     if(flag===false)
    //     {

    //         return i;
    //     }
    // }
    // }

    // console.log(missingArray(arr))


    //Simplified 

    const arr=[1,2,3,5];

    
    function missingArray(arr)
    {
       let n=arr.length+1;

       let total=Math.floor((n*(n+1)/2));
       let sum=0;
       for(let i=0;i<arr.length;i++)
       {
         sum=sum+arr[i];
       }

       return total-sum;
    }

    console.log(missingArray(arr))