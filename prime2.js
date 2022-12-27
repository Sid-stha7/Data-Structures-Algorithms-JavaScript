function prime(n) {
    if (n<2) {
        return false
    }

    for (let i = 2; i <n ;i++) {
        if (n%2===0) {
            return false
        }
        else{
            return true
        }
        
    }
}

console.log(prime(22));