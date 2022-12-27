// 1*2*3*4*5
function factorial(n){

    let result = 1
    if (n<2) {
        return result
    }
    for(let i =2 ; i<=n;i++){
        result = result*i
    }
    return result
}

console.log(factorial(5));