// =====================================================
// 01 - VAR, LET, CONST
// Run: node 01-variables/01-var-let-const.js
// =====================================================

console.log("Work Harder");

// -----------------------------------------------------
// 1. LET
// Block-scoped. Can be reassigned.
// -----------------------------------------------------
let name = "John";
name = "Jane"; // Reassigning is allowed
console.log(name); // Jane

if (true) {
    let age = 30; // Only exists inside this block { }
    console.log(age); // 30
}
// console.log(age); // ❌ ReferenceError: 'age' is not accessible outside the block

function greet() {
    let greeting = "Hello"; // Only exists inside this function
    console.log(greeting); // Hello
}
greet();
// console.log(greeting); // ❌ ReferenceError: 'greeting' is not accessible outside the function


// -----------------------------------------------------
// 2. CONST
// Block-scoped. Cannot be reassigned.
// -----------------------------------------------------
const pi = 3.14;
// pi = 3.14159; // ❌ TypeError: Assignment to constant variable
console.log(pi); // 3.14

if (true) {
    const country = "USA";
    console.log(country); // USA
}
// console.log(country); // ❌ ReferenceError: 'country' is not accessible outside the block

function showCountry() {
    const city = "New York";
    console.log(city); // New York
}
showCountry();
// console.log(city); // ❌ ReferenceError: 'city' is not accessible outside the function

// const objects CAN be modified - you just can't reassign the variable
const user = { name: "Keerthana" };
user.name = "K"; // ✅ Allowed: changing what's inside
// user = {};    // ❌ TypeError: reassigning the variable
console.log(user); // { name: 'K' }


// -----------------------------------------------------
// 3. VAR
// Function-scoped (NOT block-scoped). Can be reassigned and redeclared.
// -----------------------------------------------------
var language = "JavaScript";
language = "Python";
console.log(language); // Python

if (true) {
    var framework = "React"; // var ignores block { } scope
    console.log(framework); // React
}
console.log(framework); // React - still accessible outside the block!

function showFramework() {
    var library = "Vue"; // var respects function scope
    console.log(library); // Vue
}
showFramework();
// console.log(library); // ❌ ReferenceError: 'library' is not accessible outside the function


// -----------------------------------------------------
// 4. REDECLARATION
// -----------------------------------------------------
var a = 1;
var a = 2; // ✅ var allows redeclaring (risky - can overwrite by accident)
console.log(a); // 2

let b = 1;
// let b = 2; // ❌ SyntaxError: Identifier 'b' has already been declared
console.log(b); // 1


// =====================================================
// SUMMARY
// =====================================================
// | Keyword | Scope    | Reassign | Redeclare |
// |---------|----------|----------|-----------|
// | var     | Function | Yes      | Yes       |
// | let     | Block    | Yes      | No        |
// | const   | Block    | No       | No        |
//
// Best practice:
// - Use 'const' by default
// - Use 'let' only when the value needs to change
// - Avoid 'var' in modern JavaScript (scope + hoisting surprises)
