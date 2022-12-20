// Learn With Srikanth Racharla: https://www.youtube.com/watch?v=NHNqHSoU50c&list=PLkusOHO_VvuC5im0DL62_FXPHdfE3GWjd
console.clear();
/* 
https://www.youtube.com/watch?v=yf01WKxNRXg&list=PLkusOHO_VvuC5im0DL62_FXPHdfE3GWjd&index=50
/////////////////////// 
// Callback Functions, Higher Order Functions, Functions as First Class Objects/Citizens 
// Functions are first class objects - stored in a variable (expression), passed as an argument to another function, return from the function (closure) 
// Higher Order function - accepts another function as an argument or returns another function as a result 
// Callback Function - passed to a another function as an argument and executedlinside that function */

/* function greet(firstname) {
    const myName = 'VedaGna';
    console.log(`Good Afternoon ${firstname}, I'm ${myName}`);
}
 */
// Callback Function
function morning(firstname) {
    return `Good Morning ${firstname}`
}

// Callback Function
function afternoon(firstname) {
    return `Good Afternoon ${firstname}`
}

// Higher Order function
function greet(firstname, cb) {
    const myName = 'VedaGna';
    console.log(`${cb(firstname)}, I'm ${myName}`);
}



greet('Harry', morning)
greet('Hindu', afternoon)