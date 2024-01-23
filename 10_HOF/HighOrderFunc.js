// function callbackFunction() {
//     console.log(("I am a callback function"));
    

// }

// function higherOrderFunction(func) {
//     console.log('i am higher order function');
//     func();

    
// }

// higherOrderFunction(callbackFunction);



// function a() {
//     console.log("func a is a callback");

    
// }

// function hof(func) {
//     console.log("i am HOF, i will be called then another func as arg will be passes");
//     func();
    
// }

// hof(a);








// example

// const calculateArea = function (radius) {
//     const output = [];
//     for(let i=0;i<radius;i++){
//         output.push(2*radius[i]);
//     }
//     return output;

    
// }

// console.log(calculateArea(radius));






// const radius = [1,2,3];





// Exmample

const greet = function (name) {
    return function (m) {
        console.log(`hi i am ${name}, ${m}`);
        
    }
    
}

const greet_message = greet('Arnab');
greet_message("welcome !!!");

// console.log(greet_message);