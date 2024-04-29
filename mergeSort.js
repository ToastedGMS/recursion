function split(arr){
    if (arr.length <= 1){
        return arr;
    }
    else {
        let leftArr = arr.slice(0, arr.length/2);
        let rightArr = arr.slice(arr.length/2);
        return mergeSort(split(leftArr) ,split(rightArr))
    }
}

function mergeSort(leftArr,rightArr){
    let result = [];

    while (leftArr.length != 0 && rightArr.length != 0){
        if (leftArr[0] <= rightArr[0]){
            result.push(leftArr.shift())
        }
        else if (rightArr[0] <= leftArr[0]){
            result.push(rightArr.shift())
        }
    }
    return result.concat(leftArr).concat(rightArr);

}

console.log(split([5, 4, 9, 3, 2, 7, 6, 0, 1, 8]))