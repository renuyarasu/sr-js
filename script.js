// Learn With Srikanth Racharla: https://www.youtube.com/watch?v=NHNqHSoU50c&list=PLkusOHO_VvuC5im0DL62_FXPHdfE3GWjd
console.clear();
/* 
https://www.youtube.com/watch?v=84AhO5rHhmA&list=PLkusOHO_VvuC5im0DL62_FXPHdfE3GWjd&index=53
/////////////////////// 
// map 
// does return new array 
// does not change the size of original array 
// use values from original array when making new one */

const people = [
    { name: 'Veda', age: 5, class: 'LKG' },
    { name: 'Gnapika', age: 7, class: 'TWO' },
    { name: 'Hindu', age: 25, class: 'Diploma' }
]

const ages = people.map(function (person) {
    console.log(person.age);
    return person.name
})

const newPerson = people.map(function (person) {
    return {
        fName: person.name,
        myAge: person.age,
    }
})

console.log(newPerson);