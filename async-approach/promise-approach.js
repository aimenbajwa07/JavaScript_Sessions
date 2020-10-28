/**
 * Promise: helps in writing async code.
 * It also helps us to avoid a callback hell.
 * First, we create promise and then we handle them.
 * Promise in JS can be either resolved or rejected.
 

 var promise = new Promise(function(resolve,reject) {
     var status = true;
     if(status) {
         resolve("Your status is active..")
     }else{
         reject("Your status is inactive")
     }
 })

 promise.then(function (data) {
     console.log('then invoked..')
     console.log(data);
 }) .catch(function (error){
     console.log('catch evoked...')
     console.log(error);
 })

 // promise.then((data) => console.log(data))
 //       .catch((error) => console.log(error))

 */
 var fs = require('fs');
 var promise1 = new Promise((resolve, reject) => {
     fs.readFile('demo_one.txt', (err,data) => {
         if(err) { rejrct(err);}
         else { resolve(data);}
     })
 })

 var promise2 = new Promise((resolve, reject) => {
     fs.readFile('demo_two.txt', (err,data) => {
        if(err) {reject(err); }
        else { resolve(data); }
     })
 })

 //promise1.then((data) => console.log(data.toString()))
  //      .catch((error) => console.log(error))

  promise1.then((data) => {
      console.log(data.toString());
      promise2.then((data) => {
            console.log(data.toString());
      })
      })  .catch((error) => console.log(error))