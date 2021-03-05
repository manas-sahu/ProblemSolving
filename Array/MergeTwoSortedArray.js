const array1 = [0,3,5];
const array2 = [4,6,8,11];

function mergeArray(arr1, arr2) {
    var mergedArray = [];
    var arrayFirstItem = arr1[0];
    var arraySecondItem = arr2[0];
    var i = 1;
    var j = 1;

    if (arr1.length == 0) {
        console.log(aar2);
    }

    if (arr2.length == 0) {
        console.log(aar1);
    }
    
    
    while (arrayFirstItem || arraySecondItem) {
        console.log(arrayFirstItem, arraySecondItem);
        if(!arraySecondItem || arrayFirstItem < arraySecondItem) {
            mergedArray.push(arrayFirstItem);
            arrayFirstItem = arr1[i];
            i++;
        }
        else {
            mergedArray.push(arraySecondItem);
            arraySecondItem = arr2[j];
            j++;
        }
    }
    console.table(mergedArray);
}


mergeArray(array1, array2);