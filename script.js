// Learn With Srikanth Racharla: https://www.youtube.com/watch?v=NHNqHSoU50c&list=PLkusOHO_VvuC5im0DL62_FXPHdfE3GWjd
console.clear();
/* 
https://www.youtube.com/watch?v=84AhO5rHhmA&list=PLkusOHO_VvuC5im0DL62_FXPHdfE3GWjd&index=53
/////////////////////// 
// filter ()
// does return new arrad 
// can manipulate the size of new array 
// returns bad on condition  */

const people = [
    { name: 'Veda', age: 5, class: 'LKG' },
    { name: 'Gnapika', age: 7, class: 'TWO' },
    { name: 'Hindu', age: 25, class: 'Diploma' },
    { name: 'Renu', age: 35, class: 'MBA' }
]

const kids = people.filter(function (person) {
    return person.age <= 10;
})

/* const peopleClass = people.filter(function (person) {
    return person.class === 'LKG'
}) */

const peopleClass = people.filter((person) => person.class === 'LKG')

console.log(kids);
console.log(peopleClass);