
const arr=[7,5,2,11,2,43,1,1];


const k=2;
function rotate_by_k(arr,k){

     const reverse=(start,end)=>{
        // console.log(start,end)   
           while(start<end)
           {
              [arr[start],arr[end]]=[arr[end],arr[start]];
              start++;
              end--;
           }
     }

     reverse(0,arr.length-1);
     reverse(0,arr.length-1-k);
    
     reverse(arr.length-k,arr.length-1)

     return arr;
}

console.log(rotate_by_k(arr,k));