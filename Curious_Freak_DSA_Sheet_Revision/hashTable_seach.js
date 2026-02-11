const arr = [23, 5, 67, 12, 89, 5];

function searchElementInUnsortedArray(arr,element) {
  const hashtable = {};
  arr.forEach((value, index) => {
    hashtable[value] = index;
  });

  if (hashtable[element] !== undefined) {
    return hashtable[element];
  } else {
    return "Not Found";
  }
}


console.log(searchElementInUnsortedArray(arr,89))