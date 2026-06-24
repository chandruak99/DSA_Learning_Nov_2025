const arr = [1, 2, 3, 4, 5];

function binarySearch(arr, searchElement) {
  arr.sort((a,b)=>a-b);
  let left = 0;
  let right = arr.length-1;

  while (left <= right) {
   
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === searchElement) {
      return mid;
    } else if (searchElement < arr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1; 
    }
}
}

console.log(binarySearch(arr, 5));
