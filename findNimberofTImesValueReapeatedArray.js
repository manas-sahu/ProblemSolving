// find the numbers repeated in an array

const array1 = [1, 2 ,3 ,4, 8, 1, 1, 1 ,5, 2, 3, 8];

var map = {};

array1.forEach(x => {
    if (map[x]){
        map[x]++;
    }
    else{
        map[x] = 1;
    }
})
console.log(map);