const arr=[-5,2,-3,4];
function findSmallest(arr) {
  // your solution here


  if (!Array.isArray(arr)) return false;
  if (!arr.every((ele) => typeof ele === 'number' && Number.isFinite(ele))) return false;
  if (arr.length === 0) return null;
  let smallest = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }

  return smallest;


}
console.log(findSmallest(arr))