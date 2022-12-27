
function fibonaci(n){

    let fib= [0,1]
    for(let i =2 ; i<n;i++){

        /*i bhanda agadi ko 2 ta number lai add garney 
        bhanechi 2nd index dekhi n index samma tesko agadi agadi matra add huney bhayo
        */
        fib[i]= fib[i-1]+fib[i-2]
    }
    return fib

}

console.log(fibonaci(2));//[0,1]
console.log(fibonaci(3));//[0,1,1]
console.log(fibonaci(7));//[0,1,1,2,3,5,8]

//Big-O= O(n)