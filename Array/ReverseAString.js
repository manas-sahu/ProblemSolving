var sentence = 'My name is Manas';

// Using default available functions
var reverseSentence = sentence.split('').reverse().join('');
var reverseSentence1 = [...sentence].reverse().join('');
console.log(reverseSentence1);

// using own mechanism

var map = []
var j = 0;
for (let i = sentence.length-1; i >= 0; i--) {
    map[j] = sentence [i];
    j++;
}
var reverseSentence = map.join('');
console.table(map);
console.log(reverseSentence);