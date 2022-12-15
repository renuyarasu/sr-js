// Learn With Srikanth Racharla: https://www.youtube.com/watch?v=NHNqHSoU50c&list=PLkusOHO_VvuC5im0DL62_FXPHdfE3GWjd
console.clear();
/* 
Connect with JavaScript
/////////////////////// 
• String Methods
• Global/Local Scope
• Array Iterations (map, filter, reduce, etc)
• Global Objects (Math, Date)  */

let expenditure = [10, 20, 40, 60, 80];
let food = [100, 200, 300];

function calTotal(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    if (total > 100) {
        console.log('More expenditures');
    } else {
        console.log('Good');
    }
    return total
}

let exTotal = calTotal(expenditure)
let foodTotal = calTotal(food);
let randomTotal = calTotal([1, 2, 3, 4, 5, 6, 9, 8, 7])

/* console.log(exTotal);
console.log(foodTotal);
console.log(randomTotal); */

console.log({
    expenditure: exTotal,
    food: foodTotal,
    random: randomTotal
});