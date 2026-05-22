const s="aabcbcdbca";


function smallestDistinctWindow(s)
{
    let arr=s.split("");
    console.log("arr==",arr)
    let target=new Map();

    let minLength=Infinity;
    for(let i=0;i<arr.length;i++)
    {
        target.set(arr[i],(target.get(arr[i])||0)+1);
    }


    let targetSize=target.size;
    let window=new Map();
    let left=0;

    for(let i=0;i<arr.length;i++)
    {
        window.set(arr[i],(window.get(arr[i])||0)+1);

       

        if(window.size===targetSize)
        {
            while(window.get(arr[left])>1)
            {
              window.set(arr[left],window.get(arr[left])-1);
              left++;
            }

            minLength=Math.min(minLength,i-left+1);

        }

    }

    return  minLength;
}

console.log(smallestDistinctWindow(s));