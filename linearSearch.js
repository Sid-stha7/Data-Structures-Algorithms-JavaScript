function linearSearch(arr, target){


    for(let i = 0 ; i<arr.length; i++){
        if (arr[i]===target) {
            return i
        }
    }
    return -1
}
console.log(linearSearch([1,2,3,4,10,5,6,7],10));

// BIG O = O(n)