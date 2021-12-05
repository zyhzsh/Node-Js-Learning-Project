// file read/write io
fs = require('fs');

// read file untill it finished then ...
data = fs.readdirSync('c:/');

console.log('data',data);

console.log("this comes after");