
// Normal Flow
function find_Prime_Number(n) {

    let prime_number = [];

    for (let j = 1; j <= n; j++) {
        let count = 0;
        for (let i = 1; i * i <= j; i++) {
            if (j % i === 0) {
                count++;

                if (Math.floor(j / i) !== i) {
                    count++;
                }
            }

        }
        console.log("j,count", j, count)
        if (count === 2) {
            prime_number.push(j);
        }

    }

    return prime_number;
}

console.log(find_Prime_Number(10))
