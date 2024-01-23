// i Promise a Result 

// syntax:

// let myPromise = new Promise(function (myResolve, myReject) {
//     myResolve();
//     myReject();
    
// });


// myPromise.then(
//     function(value){}.
//     function(error){}
// );









// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
//   }
  
//   let myPromise = new Promise(function(myResolve, myReject) {
//     let x = 0;
  
  // The producing code (this may take some time)
  
//     if (x == 0) {
//       myResolve("OK");
//     } else {
//       myReject("Error");
//     }
//   });
  
//   myPromise.then(
//     function(value) {myDisplayer(value);},
//     function(error) {myDisplayer(error);}
//   );








// Example 2
// example using callback

// setTimeout(function(){
//   myfunc("Hi i using callback");
// }, 3000);

// function myfunc(value) {
//   document.getElementById("demo").innerHTML = value;
  
// }




// example using promise

// let myPromise = new Promise(function (myResolve,myReject) {
//   setTimeout(
//     function () {
//       myResolve("Hi i am using promise");
      
//     }, 3000);
  
// });

// myPromise.then(function (value) {
//   document.getElementById("demo").innerHTML = value;
  
// });





// Examples
// let p1 = new Promise((resolve,reject) => {
//   console.log("promise is pending");
//   setTimeout(() => {
//     console.log("i am a promise and i am fullfilled");
//     resolve(true);
//     // console.log("i am a promise and i am rejected");
//     // reject(new Error("I am an error"));
    
//   }, 3000);

// })


// let p2 = new Promise((resolve,reject) => {
//   console.log("promise is pending");
//   setTimeout(() => {
//     // console.log("i am a promise and i am fullfilled");
//     // resolve(true);
//     console.log("i am a promise and i am rejected");
//     reject(new Error("I am an error"));
    
//   }, 3000);

// })


// p1.then((value)=>{
//   console.log(value);
// })

// // p2.then((value)=>{
// //   console.log(value);
// // })



// p2.catch((error) =>{
//   console.log("some error happend");
// })



// example

// let promise = new Promise(resolve =>{
//   setTimeout(() => resolve("done"), 1000);
// });

// promise.then(alert);