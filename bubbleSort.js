checkingArr = [2,34,232,543,5,123,234,5,6,7,2];
// function bubbleSort(arr){
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 1; j < arr.length-i; j++) {
//             if (arr[j-1] > arr[j]) {
//                 [arr[j-1], arr[j]] = [arr[j], arr[j-1]];
//             }
//         }
//     }
//     return (console.log(arr));
// }
// bubbleSort(checkingArr);
// function selectionSort(arr){
//     let minElemIndex = 0;
//     for (let i = 0; i < arr.length; i++) {
//         minElemIndex = i;
//         for(let j = i+1; j < arr.length; j++){
//             if (arr[j] < arr[minElemIndex]){
//                 minElemIndex = j;
//             }
//         }
//         if (minElemIndex != i) {
//             [arr[i], arr[minElemIndex]] = [arr[minElemIndex], arr[i]]
//         }
//     }
//     return(console.log(arr));
// }
// selectionSort(checkingArr);
// function insertionSort(arr){
//     for(let i = 1; i < arr.length; i++) {
//         let currentItem = arr[i];
//         let j = i - 1;
//         while ((j >= 0) && (arr[j] > currentItem)){
//             arr[j+1] = arr[j];
//             j--;
//         }
//         arr[j+1] = currentItem;
//     }
//     return(console.log(arr))
// }
// insertionSort(checkingArr)


function findString(inputString, subStr){
    let result = [];
    for (let i = 0; i < inputString.length; i++) {
        if (inputString[i] == subStr[0]) {
            let match = true;
            for (let j = 1; j < subStr.length; j++){
                if(inputString[i+j] != subStr[j]){
                    match = false;
                    break;
                }
            } 
            if (match) {
                result.push(i);
            }
        }
    }
    return(console.log(result))
}
findString("Hello myis name iss", "iss")