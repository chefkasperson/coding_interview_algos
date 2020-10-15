// base function without memoization

function addTo80(n) {
    return n + 80
}

//memoized function

let cache = {}
function memoizeAddTo80(n) {
    if (n in cache) {
        return cache[n]
    } else {
        const answer = n + 80
        cache[n] = answer
        return answer
    }
}

//memoized function with closure added to keep cache inside function

function memoizeAddTo80Closure(n) {
    let cache = {}
    return function(n) {
        if (n in cache) {
            return cache(n)
        } else {
            const answer = n + 80
            cache[n] = answer
            return answer
        }
    }
}