
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




const add = (function () {
    let counter =0;
    return function () { counter +=1; return counter}
    
})();

add();
add();
add();

console.log(add( ));
