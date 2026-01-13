// let arr=[2,4,1,3,5];
// let arr=[10,2];
// let arr=[5,5,5];
let arr=[10,10,20];

function largestElement(arr)
{
    let first=-Infinity;
    let second=-Infinity;
    let third=-Infinity;


    if(arr.length<3)
    {
        return -1;
    }

    for(let i=0;i<arr.length;i++){
        if(arr[i] > first)
        {
            third=second;
            second=first;
            first=arr[i] ;
        }
        else if(arr[i]  > second)
        {
            third=second;
            second=arr[i] ;
        }
        else{
            third=arr[i] ;
        }
    }

      return third === -Infinity ? -1 : third;
}

console.log(largestElement(arr))