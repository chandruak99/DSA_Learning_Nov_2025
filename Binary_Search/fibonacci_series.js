
// let  n=5
// let k=0;
// let j=1;

// process.stdout.write(k+" ");
// process.stdout.write(j+" ");

// for(let i=1;i<=n;i++)
// {
//     j=j+i;
//     process.stdout.write(i+" ");
// }

let n=5;
let arr=[];

arr[0]=0;
arr[1]=1;

for(let i=2;i<=n;i++)
{
   arr[i]=arr[i-1]+arr[i-2];
}

console.log(arr)