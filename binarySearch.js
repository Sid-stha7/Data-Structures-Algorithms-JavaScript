function birarySearch(arr, target ){

    let left_index= 0
    let right_index= arr.length-1


    while (left_index<=right_index)
    {
       let middle_index= Math.floor((left_index+right_index)/2)
        if (target === arr[middle_index]) {
            return middle_index
            
        }
        if (target < arr[middle_index] ) {
            right_index= middle_index-1
        }

        if (target>arr[middle_index]) {
            left_index= middle_index+1
        }
    }
    return -1
}

console.log(birarySearch([1,2,3,4,5], 5));