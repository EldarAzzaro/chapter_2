// TASK 2

// #01

// let giveNumber = +prompt("Введите число от 0 до 59");

// const hours = function(min) {
//   if (min >= 0 && min <= 15) {
//     return "первая";
//   } else if (min > 15 && min <= 30) {
//     return "вторая";
//   } else if (min > 30 && min <= 45) {
//     return "третья";
//   } else if (min > 45 && min <= 60) return "четвертая";
// };

// alert(hours(giveNumber));

// #02

// let hours = +prompt("Введите время в часах");

// let convertToSec = function(a) {
//   if (typeof a === "number") return a * 60 * 60;
// };

// alert(convertToSec(hours));

// #03

// let first = +prompt("Веддите первое число");
// let second = +prompt("Веддите второе число");

// let checkNumber = function(a, b) {
//   if (a % b == 0) {
//     return true;
//   } else {
//     return false;
//   }
// };

// alert(checkNumber(first, second));

// #04

// let elevator = {
//   floor: 1,
//   minFloor: 1,
//   maxFloor: 16,
//   upOneFloor() {
//     if (this.floor < this.maxFloor) {
//       this.floor++;
//       this.printFloor();
//     }
//   },
//   downOneFloor() {
//     if (this.floor > this.minFloor) {
//       this.floor--;
//       this.printFloor();
//     }
//   },
//   printFloor() {
//     console.log("Elevator is on the floor" + this.floor);
//   },
//   toFloor: function(a) {
//     while (a != this.floor) {
//       if (a <= this.maxFloor && a >= this.minFloor) {
//         if (a > this.floor) {
//           this.upOneFloor();
//         } else if (a < this.floor) {
//           this.downOneFloor();
//         }
//       } else return;
//     }
//   }
// };
