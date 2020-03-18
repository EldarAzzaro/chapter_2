// TASK-#1

// №01
// const arguments = function (anyArgument) {
//    console.log(anyArgument);
// }

// №02
// function getFactorial(n) {
//    //return n === 1 ? 1 : n * getFactorial(n - 1); // short version

//    if (n === 1) {
//       return 1;
//    } else {
//       return n * getFactorial(n - 1);
//    }
// }

// const input = 5;
// const factorial = getFactorial(input);
// console.log(`${input}! = ${factorial}`);

// №03
// function getFibonacciNumbers(n) {
//    //return n <= 1 ? n : getFibonacciNumbers(n - 1) + getFibonacciNumbers (n - 2); // short version

//    if (n <= 1) {
//      return n;
//    } else {
//      return getFibonacciNumbers(n - 1) + getFibonacciNumbers (n - 2);
//    }
// }

// const numbersToDisplay = 4;
// const fibonacciNumbers = getFibonacciNumbers(numbersToDisplay);
// console.log(fib(`${numbersToDisplay})>>${fibonacciNumbers}`);

// №04
// let celsiusNumber = +prompt('Введите температуру')

// const converterToFarenhight = function (celsius) {
//    return Farenheit = 1.8 * celsius + 32
// }

// alert(converterToFarenhight(celsiusNumber));

// №05
// let number = +prompt('Введите число');

// const numberRow = function (num1) {
//    let arr = [];
//    if (typeof num1 != 'number') {
//       return false;
//    } else if(num1<1) for(let i=1; i>=num1;i--){
//       arr.push(i);
//    } else(num1>1) for(i > 1; i > num1;i++){
//       arr.push(i);
//    }return arr.join(',');
//    }

// alert(numberRow(number));

// TEST

// let name = "John";
// let admin = name;

// alert("Admin " + admin);

// let sendName = prompt("Укажите ваше имя");

// alert("Имя пользователя " + sendName);

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

// let arr = [1, 2, 5, 9, 4, 13, 4, 10];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 4) {
//     console.log("Есть");
//   } else {
//   }
// }

