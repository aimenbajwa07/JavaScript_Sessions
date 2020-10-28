
var fs = require('fs');
const { compileFunction } = require('vm');

/*
fs.readFile('source_one.txt', function (err, data) {
    if(err) console.log(err)
    fs.writeFile('destination.txt', data, function(err) {    //console.log(data.toString())
        if(err) console.log(err)
        console.log('Data copied from source_one to destnation file successfully..!')
    })
    
}) */

/*
fs.readFile('source_two.txt', function (err, data) {
    if(err) console.log(err)
    fs.appendFile('destination.txt', data, function(err) {    
        if(err) console.log(err)
        console.log('Data copied from source_two to destnation file successfully..!')
    })
    
}) 
*/

//Callback Hell
fs.readFile('source_one.txt', function (err, data) {
    if(err) {
        console.log(err)
    }else{
        fs.readFile('sample_two.txt', function (err, data2){
            if(err) {
                console.log(err)
            }else {
                fs.writeFile('destination.txt', data + data2, function(err) {
                    if(err){
                        console.log(err)
                    }else{
                        console.log('Data Copied from source_one and sample_two successfully..')
                    }
                })
            }
        })
    }
    
})