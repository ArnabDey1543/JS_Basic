// funciton sequence

// function func1(){
//     return "hello";
// }

// function func2() {
//     return "Goodbye";
//   }

// // func();
// console.log(func1());
// console.log(func2());




// Sequence Control
// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
//   }
  
//   function myCalculator(num1, num2) {
//     let sum = num1 + num2;
//     return sum;
//   }
  
//   let result = myCalculator(5, 5);
//   myDisplayer(result);




// js Callbacks

// function myCalculator(num1, num2, myCallback) {
//     let sum = num1 + num2;
//     return myCallback(sum);
//   }
  
  
//   myCalculator(5, 5, callback_func);
//   console.log(myCalculator);








// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
//   }
  
//   function myCalculator(num1, num2, myCallback) {
//     let sum = num1 + num2;
//     myCallback(sum);
//   }
  
//   myCalculator(5, 5, myDisplayer);








const num = [1,2,3,-4,5,-6,7,-8];


// calling removeNeg function using callback
const posNum = removeNeg(num, (x)=>x>=0);

// displaying result
document.getElementById("demo").innerHTML = posNum;

function removeNeg(numbers,callback) {
    const myArray = [];
    for(const x of numbers){
        if(callback(x)){
            myArray.push(x);
        }
    }
    return myArray;
    
}




