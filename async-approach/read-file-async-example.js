var fs = require('fs');

//read file asynchronously
fs.readFile('demo_one.txt', function (err, data) {
    if(err){
        console.log(err);
    }else{
        console.log(data.toString())
    }

})

fs.readFile('demo_two.txt', function (err, data) {
    if(err){
        console.log(err);
    }else{
        console.log(data.toString())
    }

})