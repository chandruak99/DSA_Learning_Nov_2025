const arr=[1,2,3,4,5];


function rotateByK(arr,k)
{

    function reverse(a,b)
    {
          while(a<b)
          {
            [arr[a],arr[b]]=[arr[b],arr[a]];
            a++;
            b--;
          }

    }
    reverse(0,arr.length-1);
    reverse(0,k-1);
    reverse(k,arr.length-1)

     return arr;
}

console.log(rotateByK(arr,3))