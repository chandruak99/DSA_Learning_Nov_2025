const arr=[1,1,2,2,3,4,4,5];



let i=0;
for(let j=1;j<arr.length;j++)
{
    if(arr[j]!==arr[i])
    {
        i++;
        arr[i]=arr[j];
    }
}

console.log(arr.slice(0,i+1))