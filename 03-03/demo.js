var fs=require('fs');

data={
    name:'Bob'
}

fs.writeFile('data.json',JSON.stringify(data),(err)=>{
    console.log('write finished',err);
});