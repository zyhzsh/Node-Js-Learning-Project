// file read/write io
fs = require('fs');

function somedata(err,data){
    console.log('data:',data);
}
fs.readdir('c:/',somedata);

console.log('this comes after');