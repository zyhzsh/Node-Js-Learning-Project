var fs=require('fs');

//This would be an asynchronous function, will be an callback
//The call back contain to return value "err","data"
fs.readFile('./data.json','utf-8',function(err,data){
    var data=JSON.parse(data);
console.log(data.name);
});

var data= require('./data.json')
console.log(data.name);

