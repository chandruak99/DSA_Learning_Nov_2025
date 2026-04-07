function sieveOfEratosthenes(n) {
    const isPrime = new Array(n + 1).fill(true);

    isPrime[0] = false;
    isPrime[1] = false;
    console.log(isPrime)
    for (let i = 2; i * i <= n; i++) {
        // console.log(isPrime[i], i)
        if (isPrime[i]) {
            // console.log("i==", i)
            for (let j = i * i; j <= n; j += i) {
                isPrime[j] = false;
            }
        }
    }

    const primes = [];
    for (let i = 2; i <= n; i++) {
        if (isPrime[i]) {
            primes.push(i);
        }
    }

    return primes;
}

// Example
console.log(sieveOfEratosthenes(10));
// Output: [2, 3, 5, 7]