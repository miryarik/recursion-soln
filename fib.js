function fib(n) {
    let first = 0;
    let second = 1;
    let result = [];

    if (n < 1) return [];
    // if n is 1, return [fist]
    if (n == 1) return [first];
    // if n is 2, return [first, second]
    if (n == 2) return [second];

    // if n is greater than 2
    // added the first two
    result.push(first);
    result.push(second);

    for (let i = 3; i <= n; i++) {
        // calculate next = second + first
        let next = second + first;

        // add next to result
        result.push(next);

        // next becomes new second
        first = second;
        // second becomes new first
        second = next;
    }

    // return the result
    return result;
}

console.log(fib(8));


