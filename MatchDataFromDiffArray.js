// Let there is two Array find the value which is common in between
// e.g const Array1 = ['x', 'y', 'z', 'a']; const Array2 = ['a', 'b', 'c']

const array1 = ['x', 'y', 'z', 'a']; 
const array2 = ['a', 'b', 'c'];

// With o(n^2)


function matcheArrayValues(arr1, arr2) {
    arr1.forEach( x => {
        arr2.forEach( y => {
        if (x === y) {
            console.log('The matched value is : ' + x);
            return;
        }
        else {
            console.log('Not Matched');
        }
    })
});
}




matcheArrayValues(array1, array2);

// Optimized code

var objectCreateFromArray1 = {};

array1.forEach( x => {
    objectCreateFromArray1[x] = true;
})

array2.forEach ( y => {
    if (objectCreateFromArray1[y]){
        console.log('Matched');
    }
    else {
        console.log('Not Matched');
    }
})