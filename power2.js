// 4/2=0
// 2/2=0
// 1

function power(n){
    if (n<2) {
        return false
    }

    while(n>2){
        if (n%2 !==0) {
            return false
        }
    
    }
    return true
}