
const arr=[0,1,2,0,1,2]
function sort012(arr) {
       
        
        
        let low=0;
        let mid=0;
        let high=arr.length-1;
        
        while(mid<=high)
        {
            console.log("arr",low,mid,high,arr)
            if(arr[mid]===0)
            {
                [arr[low],arr[mid]]=[arr[mid],arr[low]];
                low++;
                mid++;
            }
            else if(arr[mid]===1)
            {
                mid++;
            }
            else if(arr[mid]===2)
            {
                [arr[mid],arr[high]]=[arr[high],arr[mid]];
                high--;
            }
        }
        
        return arr;
        
        
    }

console.log("final",sort012(arr))