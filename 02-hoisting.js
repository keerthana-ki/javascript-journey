// =====================================================
// 02 - HOISTING
// Run: node 01-variables/02-hoisting.js
// =====================================================
// JavaScript reads your file in two passes:
//   1. Setup pass - scans the whole file and registers every
//      variable and function you declared.
//   2. Run pass   - runs your code line by line.
//
// Hoisting = declarations are known BEFORE the code runs,
// as if they were moved to the top.

// -----------------------------------------------------
// 1. var - hoisted, starts as undefined
// -----------------------------------------------------
console.log(fruit); // undefined (declared, but value not assigned yet)
var fruit = "Mango";
console.log(fruit); // Mango

// JavaScript actually treats the above like this:
// var fruit;            -> moved to the top, value = undefined
// console.log(fruit);   -> undefined
// fruit = "Mango";      -> value assigned here


// -----------------------------------------------------
// 2. let - hoisted but locked (Temporal Dead Zone)
// -----------------------------------------------------
// console.log(car); // ❌ ReferenceError: Cannot access 'car' before initialization
let car = "BMW";
console.log(car); // BMW


// -----------------------------------------------------
// 3. const - same as let (Temporal Dead Zone)
// -----------------------------------------------------
// console.log(gst); // ❌ ReferenceError: Cannot access 'gst' before initialization
const gst = 18;
console.log(gst); // 18


// -----------------------------------------------------
// 4. Function declaration - fully hoisted (body included)
// -----------------------------------------------------
sayHello(); // ✅ Works before it is defined
function sayHello() {
    console.log("Hello from a hoisted function");
}


// -----------------------------------------------------
// 5. Function expression with var - only the variable is hoisted
// -----------------------------------------------------
// sayBye(); // ❌ TypeError: sayBye is not a function (it is undefined here)
var sayBye = function () {
    console.log("Bye!");
};
sayBye(); // Bye!


// -----------------------------------------------------
// 6. Arrow function with const - Temporal Dead Zone
// -----------------------------------------------------
// sayHi(); // ❌ ReferenceError: Cannot access 'sayHi' before initialization
const sayHi = () => {
    console.log("Hi!");
};
sayHi(); // Hi!


// =====================================================
// SUMMARY
// =====================================================
// - var                    -> hoisted, value is undefined until assigned
// - let / const            -> hoisted but locked (TDZ); using early throws an error
// - function declarations  -> fully hoisted; can be called before they are defined
// - function expressions /
//   arrow functions        -> follow the rules of var / let / const
