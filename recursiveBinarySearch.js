function rBinarySearch(arr,target){
    return birarySearch(arr, target , 0, arr.length-1)
}

function birarySearch(arr, target, left, right){

    if (left>right) {
        return -1
    }
    let middle = Math.floor((left+right)/2)
    if (target===arr[middle]) {
        return middle
    }

    if (target<middle) {
        return birarySearch(arr,target,left,middle-1)
    }

    if(target>middle){
        return birarySearch(arr, target, middle+1, right)
    }
    
}

console.log(rBinarySearch([1,2,3,4,5],3));
