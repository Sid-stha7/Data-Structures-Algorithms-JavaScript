function fib (n){
    let fibarr= [0,1]

    if (n<2) {
        return fibarr
    }

    for (let i=2 ; i<n;i++){
        fibarr[i]= fibarr[i-1]+ fibarr[i-2]
    }
    return fibarr
}

console.log(fib(5));