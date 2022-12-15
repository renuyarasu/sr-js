// Learn With Srikanth Racharla: https://www.youtube.com/watch?v=NHNqHSoU50c&list=PLkusOHO_VvuC5im0DL62_FXPHdfE3GWjd
console.clear();
/* 
Connect with JavaScript
/////////////////////// 
• String Methods
• Global/Local Scope
• Array Iterations (map, filter, reduce, etc)
• Global Objects (Math, Date)  */

let names = ['Veda', 'Gnapika', 'Hindu'];
let surename = 'Yarasu';

const myArray = []

for (let i = 0; i < names.length; i++) {
    console.log(i);
    console.log(names[i]);
    let fullname = `${names[i]} ${surename}`;
    myArray.push(fullname)
}

console.log(myArray);