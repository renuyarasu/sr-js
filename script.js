// Learn With Srikanth Racharla: https://www.youtube.com/watch?v=NHNqHSoU50c&list=PLkusOHO_VvuC5im0DL62_FXPHdfE3GWjd
console.clear();
/* 
https://www.youtube.com/watch?v=84AhO5rHhmA&list=PLkusOHO_VvuC5im0DL62_FXPHdfE3GWjd&index=53
/////////////////////// 
// reduce 
// iterates, callback function 
// reduces to a single value - number, array, object 
// 1 parameter ('acc') - total of all calculations 
// 2 parameter ('curr') - current iteration/value)   */

const people = [
    { name: 'Veda', age: 5, class: 'LKG', salary: 400 },
    { name: 'Gnapika', age: 7, class: 'TWO', salary: 300 },
    { name: 'Hindu', age: 25, class: 'Diploma', salary: 200 },
    { name: 'Renu', age: 35, class: 'MBA', salary: 100 }
]

const newArray = people.reduce((acc, currentPerson) => {
    console.log(`Total Salary: ${acc}`);
    console.log(`Current Person Salary: ${currentPerson.salary}`);
    acc += currentPerson.salary;
    return acc;
}, 0)

console.log(newArray); // 1000