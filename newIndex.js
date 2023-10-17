function insertionSort(arr){
    for (let i = 0; i < arr.length; i++) {
        let currentItem = arr[i];
        let j = i+1;
        for(;j <= arr.length && arr[i] > arr[j] ;j++){
            arr[j+1] = arr[j];
        }
        arr[j + 1] = currentItem;
    }
    return(arr)
}

checkingArr = [2,34,232,543,5,123,234,5,6,7,2];

console.log(insertionSort(checkingArr));