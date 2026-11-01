
//bruteForce approach
// function celebrityProblem(arr)
// {
//    let iknow=new Array(arr.length).fill(0);
//    let knowMe=new Array(arr.length).fill(0);

//    for(let i=0;i<arr.length;i++)
//    {
//      for(let j=0;j<arr.length;j++)
//      {
//         if(arr[i][j]===1)
//         {
//             knowMe[j]++;
//             iknow[i]++;
//         }
//      }
//    }

//    console.log("knowMe==",knowMe);
//    console.log("iknow==",iknow)

//    for(let i=0;i<arr.length;i++)
//    {
//       if(iknow[i]<=1 && knowMe[i]===arr.length )
//       {
//         return i;
        
//       }
//    }
//    return -1;
// }



//stack approach 


function celebrityProblem(arr)
{
    let top=0;
    let down=arr.length-1;

    while(top<down)
    {
        if(arr[top][down]===1)
        {
            top=top+1;
        }
        else if(arr[down][top]===1)
        {
            down=down-1;
        }
        

        top++;
        down--;
    }


    if(top>down)
    {
        return -1;
    }


    for(let i=0;i<arr.length;i++)
    {
        if(i===top)
        {
            continue;
        }

        if(arr[top][i]!==0 && arr[i][top]!==1)
        {
            return -1;
        }
        
    }

    return top;




}

let arr=[[1,1,0],[0,1,0],[0,1,1]];
console.log(celebrityProblem(arr));