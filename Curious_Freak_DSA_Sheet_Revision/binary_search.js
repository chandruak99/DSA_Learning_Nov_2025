const arr = [1, 2, 3, 5, 6, 7, 8];

function binarySearch(arr, search) {
  let low = 0;
  let high = arr.length-1;

  

  while (low <= high) {
    
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === search) {
      return mid;
    } else if (search < arr[mid] ) {
        high=mid-1;
    }
    else{
        low=mid+1;
    }
  }

  
}

console.log(binarySearch(arr,3))
