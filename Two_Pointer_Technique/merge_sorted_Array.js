
//bruteforce technique
// const nums1=[1,2,3,0,0,0];
// const nums2=[5,6,7];

// const m=3;
// const n=3;


// const nums1=[1,2,3,0,0,0];
// const m=3;
// const nums2=[2,5,6];
// const n=3;

// const nums1=[1];
// const m=1;
// const nums2=[];
// const n=0;

const nums1=[0];
const m=0   ;
const nums2=[1];
const n=1;

// function mergeSortedArray(nums1,m,nums2,n)
// {
//     let j=0;
//    for(let i=0;i<m+n;i++)
//    {
     
//     if(i>=m)
//     {
//         if(j<n)
//         {
//          nums1[i]=nums2[j];
//          j++;
//         }
//     }
//    }
//    nums1.sort((a,b)=>a-b)
//    return nums1;
// }
// console.log(mergeSortedArray(nums1,m,nums2,n))




// const nums1=[1,2,3,0,0,0];
// const nums2=[5,6,7];

// const m=3;
// const n=3;

function mergeSortedArray(nums1,m,nums2,n)
{
    
    let left=0;
    let right=0;
    let result=[]
    let i=0;

    while(left <m && right < n)
    {
       if(nums1[left]===nums2[right])
       {
          result[i]=nums1[left];
          i++;
          result[i]=nums2[right];
          i++;
          right++;
          left++;

       }
       else if(nums1[left] < nums2[right])
       {
         result[i++]=nums1[left];
         left++;
       }
       else{
        result[i++]=nums2[right];
        right++;
       }
    }
    // console.log("m==",m);
    // console.log("left==",left);
    // console.log("right==",right)
    while(left<m)
    {
        result.push(nums1[left++]);
    }
    while(right<n)
    {
       result.push(nums2[right++]);
    }

    return result;
}

console.log(mergeSortedArray(nums1,m,nums2,n))


