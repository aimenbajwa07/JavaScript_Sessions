var fs = require('fs');
//this method makes file and overwrites it if you call again
/*
fs.writeFile('sample_two.txt', "Hello Everyone..!!", function(err) {
    if(err){
        console.log(err);
    } else{
        console.log("Data is written successully..")
    }
})*/

fs.appendFile('sample_two.txt', "Hello Everyone..!!", function(err) {
    if(err){
        console.log(err);
    } else{
        console.log("Data is written successully..")
    }
})