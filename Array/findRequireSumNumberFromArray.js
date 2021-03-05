//  Find if the Sum 8 present or not

const sum = 9;

// e.g 1
const array1 = [1,2,3,5,4,9];

// e.g 2
const array2 = [2,7,11,15];

// O(n^2) method

// for (let i = 0; i < array1.length - 1; i++) {
//     for (let j = i+1; j < array1.length; j++) {
//         if (array1[i] + array1[j] === sum) {
//             console.log('true');
//         };        
//     }
    
// }

// Optimized code

var findPair = {};

array2.forEach( (x, index) => {
    if (findPair[sum-x] !== undefined){
        console.log('true');
        console.log(index);
        console.log(findPair[sum-x]);
    }
    else {
        const pair = x;
        findPair[pair] = index;
    }
})