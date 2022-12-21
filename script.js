// Learn With Srikanth Racharla: https://www.youtube.com/watch?v=NHNqHSoU50c&list=PLkusOHO_VvuC5im0DL62_FXPHdfE3GWjd
console.clear();
/* 
https://www.youtube.com/watch?v=84AhO5rHhmA&list=PLkusOHO_VvuC5im0DL62_FXPHdfE3GWjd&index=53
/////////////////////// 
// find ()
// return single instance - (in this case object) 
// return first match, if no match undefined
// great for getting unique value  */

const people = [
    { name: 'Veda', age: 5, class: 'LKG', id: 1 },
    { name: 'Gnapika', age: 7, class: 'TWO', id: 2 },
    { name: 'Hindu', age: 25, class: 'Diploma', id: 3 },
    { name: 'Renu', age: 35, class: 'MBA', id: 4 },
]

const findPerson = people.find((person) => person.id === 4);
console.log(findPerson);

const findPerson2 = people.filter((person) => person.id === 4);
console.log(findPerson2[0]);