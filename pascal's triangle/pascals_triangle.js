const n=5;


let triangle=[];

for(let i=0;i<n;i++)
{
    let row=new Array(i+1);
    row[0]=1;
    row[i]=1;

    for(let j=1;j<i;j++)
    {
        row[j]=triangle[i-1][j-1]+triangle[i-1][j];
    }

    triangle.push(row);
}

console.log(triangle)