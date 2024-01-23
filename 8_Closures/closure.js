
// A function can access all variables defined inside the function, like this:

// function myFunc() {
//     let a =3;
//     return a*a;

    
// }


// But a function can also access variables defined outside the function, like this:

// let a = 4;
// function myFunc() {
//   return a * a;
// }

// console.log(myFunc());




// const add = (function () {
//     let counter =0;
//     return function () { counter +=1; return counter}
    
// })();

// add();
// add();
// add();

// console.log(add( ));




function myFunc() {
    function displayName(name) {
        const name="arnab";
        console.log(name);

        
    }
    return displayName;
}


const func= myFunc();

myFunc();

// console.log(myFunc());









// function makeAdder(x) {
//     return function (y) {
//         return x+y;
        
//     };
// }


// const add5 = makeAdder(5);
// const add10 = makeAdder(10);

// console.log(add5(2));
// console.log(add10(2));