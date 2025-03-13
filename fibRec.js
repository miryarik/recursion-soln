function fib(n) {

    let result = [];

    if (n == 1) {
        return [0];
    }
    if (n == 2) {
        return [0, 1];
    }

    // if n > 2
    // get previous sequence upton n-1
    let prevSeq = fib(n-1);
    // calculate next term using last two and add it to sequence
    let [first, second] = prevSeq.slice(-2);
    return [...prevSeq, (first + second)];
}

console.log(fib(5));
