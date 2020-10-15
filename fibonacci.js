const fibIterative = (number) => {
   let array = [0, 1]

   for (i = 2; i <= number; i++) {
        let sum = array[i-1] + array[i-2]
        array.push(sum)
   }
   return array[number]
}


const fibRecursive = (number) => {
    if (number < 2) {
        return number
    }

    return fibRecursive(number - 1) + fibRecursive(number - 2)
}

function fibonacciMaster() {
    let cache = {}
    return function fib(n) {
        if (n in cache) {
            return cache[n]
        } else {
            if (n < 2) {
                return n
            } else {
                cache[n] = fib(n-1) + fib(n-2)
                return cache[n]
            }
        }
    }
}