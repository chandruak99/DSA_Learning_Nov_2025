const target=[1,2,3,4];
const arr=[2,4,3,1];

function makeArraysEqual(target,arr)
{
    for(let i=0;i<target.length;i++)
    {
        let found=false;
        for(let j=0;j<arr.length;j++)
        {
            
            if(target[i]===arr[j])
            {
                found=true;
                console.log("else")
                while(j>i && j>=0)
                {
                    [arr[j],arr[j-1]]=[arr[j-1],arr[j]];
                    j--;
                }

            }
           
            
            
        }
        if(found===false)
        {
            return false;
        }
    }

    console.log("target==",target);
    console.log("arr==",arr)
}

console.log(makeArraysEqual(target,arr));
