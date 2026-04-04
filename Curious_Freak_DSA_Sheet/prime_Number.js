// const n = 10;
// const primeNumbers = [];
// for (let i = 1; i < n; i++) {
//   let count = 0;
//   for (let j = 1; j <= i; j++) {
//     if (i % j === 0) {
//       count++;
//     }
//   }
//   //   console.log("count==", count);

//   if (count === 2) {
//     primeNumbers.push(i);
//   }
// }

// console.log("primeNumber==", primeNumbers);

// function checkPrime(n) {
//   let cnt = 0;

//   // The loop runs from 1 up to the square root of n
//   for (let i = 1; i * i <= n; i++) {
//     if (n % i === 0) {
//       cnt++; // Count the divisor 'i'

//       // Check if the 'partner' divisor is different
//       // Example: if n=12 and i=2, then n/i=6.
//       // 2 and 6 are different, so we count both.
//       if (Math.floor(n / i) !== i) {
//         cnt++;
//       }
//     }
//     console.log("count==", cnt);
//   }

//   // A prime number has exactly 2 divisors (1 and itself)
//   if (cnt === 2) {
//     return true;
//   }
//   return false;
// }

// Testing with n=15
// console.log("Is 15 prime?", checkPrime(15)); // Output: false (Factors: 1, 3, 5, 15)
// console.log("Is 7 prime?", checkPrime(7));

//prime Number Optimized
function primeNumber(num) {
  let count = 0;
  for (let i = 1; i * i <= num; i++) {
    if (num % i == 0) {
      count++;
      if (Math.floor(num / i) !== i) {
        count++;
      }
    }
    console.log("console inside", count);
  }
  //   console.log("count==", count);
  if (count === 2) {
    return true;
  }
  return false;
}
console.log(primeNumber(7));
