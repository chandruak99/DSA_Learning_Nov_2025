const str="Chandru";


function reverseProgram(str)
{
    let arr=str.split("");
    let n=arr.length-1;
    for(let i=0;i<arr.length/2;i++)
    {
        [arr[i],arr[n-i]]=[arr[n-i],arr[i]];
    }

    console.log("str==",arr.join(""))
}
 reverseProgram(str)