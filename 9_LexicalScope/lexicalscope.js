const fullName = "Arnab Dey";

// Define nested functions:
function profile() {
  function sayName() {
    function writeName() {
      return fullName;
    }
    return writeName();
  }
  return sayName();
}

console.log(fullName);





// const fullName = "Arnab Dey";

// // Nested functions containing two more fullName variables:
// function profile() {
//   const fullName = "Vedant";
//   function sayName() {
//     const fullName = "Raghav";
//     function writeName() {
//       return fullName;
//     }
//     return writeName();
//   }
//   return sayName();
// }

// console.log(fullName);






// Define a function:
// function showLastName() {
//     const lastName = "Dey";
//     return lastName;
// }

// // Define another function:
// function displayFullName() {
//     const fullName = "Arnab " + lastName;
//     return fullName;
// }

// // Invoke displayFullName():
// console.log(displayFullName());


//   Error
