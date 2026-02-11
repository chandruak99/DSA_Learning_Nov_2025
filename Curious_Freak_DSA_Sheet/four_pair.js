

const arr=[1,0,-1,0,-2,2];


function fourPair(arr,target)
{   
    arr.sort((a,b)=>a-b)
    let result=[];

    for(let i=0;i<arr.length-3;i++)
    {
        for(let j=i+1;j<arr.length-2;j++)
        {
            let low=j+1;
            let high=arr.length-1;

            while(low<high)
            {
                let sum=arr[i]+arr[j]+arr[low]+arr[high];
                // console.log("sum==",arr[i],arr[j],arr[low],arr[high]);
                // console.log("totalSum==",sum)
                if(sum===target)
                {
                    result.push([arr[i],arr[j],arr[low],arr[high]]);
                    low++;
                    high--;
                }
                else if(sum < target)
                {
                    low++;
                }
                else 
                {
                    high--;
                }
            }

        }
    }

    return result;

}

console.log(fourPair(arr,0));