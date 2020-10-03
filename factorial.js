const factorialRecursive = (number) => {
    if (number === 2) {
        return 2
    }

    return number * factorialRecursive(number - 1)
}

const factorialIterative = (number) => {
    let solution = 1
    for (i=2; i <= number; i++) {
        solution += solution * i
    }
    return solution
}