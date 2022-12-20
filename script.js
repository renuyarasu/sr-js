// Learn With Srikanth Racharla: https://www.youtube.com/watch?v=NHNqHSoU50c&list=PLkusOHO_VvuC5im0DL62_FXPHdfE3GWjd
console.clear();
/* 
https://www.youtube.com/watch?v=yf01WKxNRXg&list=PLkusOHO_VvuC5im0DL62_FXPHdfE3GWjd&index=50
/////////////////////// 
// Powerful' Array Methods 
// forEach, map, filter, find, reduce 
// Iterate over array - no for loop required 
// Accept CALLBACK function as an argument, calls Callback against each item in a array. Reference Item in the Callback Paramater. */

const people = [
    { name: 'Veda', age: 5, class: 'LKG' },
    { name: 'Gnapika', age: 7, class: 'TWO' },
    { name: 'Hindu', age: 25, class: 'Diploma' }
]

/* function showPerson(person) {
    console.log(person.name);
} */

// people.forEach(showPerson)

people.forEach(function (person) {
    console.log(person.name.toUpperCase());
})