async function bubbleSort(arr) {
    console.time("bubbleSort");
    let arrLength = arr.length;
    for (let i = 0; i < arrLength; i++){
        for(let j = 1; j < arr.length - i; j++){
            if (arr[j-1] > arr[j]){
                [arr[j-1], arr[j]] = [arr[j], arr[j-1]];
            }
        }
    }
    console.timeEnd("bubbleSort");
    return(arr)
}
async function selectionSort(arr) {
    console.time("selectionSort");
    let minElemIndex = 0;
    for(let i = 0; i < arr.length; i++){
        minElemIndex = i;
        for (let j = i+1; j < arr.length; j++) {
            arr[j] < arr[minElemIndex] ? minElemIndex = j: null;
        }
        minElemIndex != i ? [arr[i], arr[minElemIndex]] = [arr[minElemIndex], arr[i]]: null ;
    }
    console.timeEnd("selectionSort");
    return(arr);
}
async function findString(string, subStr){
    let result = [];
    for(let i = 0;i < string.length; i++){
        if (string[i] == subStr[0]){
            for(let j = 1; j < subStr.length; j++){
                if (string[i+j] == subStr[j]){
                    result.push(i);
                }
            }
        }
    }
    console.log(result);
}
async function insertionSort(arr){
    console.time("insertionSort");

    for (let i = 1; i < arr.length; i++) {
        let currentItem = arr[i];
        let j = i - 1;
        while((j >= 0) && (arr[j] < currentItem)){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = currentItem;
    }
    console.timeEnd("insertionSort");
    return(arr)
}

async function quickSortTimer(arr) {
    console.time("quickSort");
    let outputArr = quickSort(arr);
    console.timeEnd("quickSort");
    return(outputArr);
}
function quickSort(arr){
    if (arr.length <= 1){
        return arr;
    };
    let leftArr = [];
    let rightArr = [];
    let middleArr = [];

    let pilot = arr[arr.length - 1];

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > pilot) {
            rightArr.push(arr[i]);
        } else if (arr[i] < pilot) {
            leftArr.push(arr[i]);
        } else {
            middleArr.push(arr[i]);
        }
    }
    return [...quickSort(leftArr),...middleArr,...quickSort(rightArr)];
}
checkingArr = [1,32,4324,23543,512,31,423,45,3,432,543];
// for (let i = 0; i < 100000; i++){
//     checkingArr[i] = Math.floor(Math.random()*1000);
// }

// async function runAsyncFunctions() {
//     const result1 = await bubbleSort(checkingArr);
//     const result2 = await insertionSort(checkingArr);
//     const result3 = await quickSortTimer(checkingArr);
//     console.log([result1, result2, result3]);
//   }
// runAsyncFunctions();
