//  Find if the Sum 8 present or not

const sum = 8;

// e.g 1
const array1 = [1,2,3,5,4,9];

// e.g 2
const array2 = [1,2,4,4];

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

array1.forEach( x => {
    if (findPair[x]){
        console.log('true');
    }
    else {
        const pair = 8 - x;
        findPair[pair] = true;
    }
})