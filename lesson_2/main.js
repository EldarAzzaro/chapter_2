// // Метод includes (находит подстроку в строке)

// const str = "Hello world";

// console.log(str.includes("world"));

// Метод indexOf
// const str = "Hello world, welcome to universe";

// console.log(str.indexOf("o"));

// Метод split

// const str = "How are you doing today?";

// console.log(str.split(" ", 3));

// метод substr

// const str = "Hello world";

// console.log(str.substr(1, 4));

// метод substring

// console.log(str.substring(2, 4));

// Шаблон строк

// const name = "John";
// const age = 20;
// const sex = "male";
// ES5
// // const personDescription = "Name: " + name + " Age " + age + " Male " + sex;

// ES6
//                                  //   ${тернарный оператор или функцию можем записать внутри}
// const personDescription = `Name: ${name} Age: ${age * 2} Sex: ${sex}`;
// console.log(personDescription);

// const message = "Hello!\n I'm Jhon \\ (-_-) /";

// console.log(message);

// RegEx- регулярные выражения
// /l/g-флаг g(global)
// const regexp1 = /l/g;
// const regexp2 = new RegExp("l", "g");
// const regexp3 = new RegExp(/l/, "g");
// const regexp4 = RegExp(/l/, "g");

// let str = "Hello world";

// const result = str.replace(regexp1, "#");

// console.log(result);

// const str = "Please open the book on page №7";

// console.log(str.match(/\d/gi));

// console.log(str.replace(/\w/gi, "#"));

// console.log(str.replace(/\s/gi, "-"));

// console.log(str.replace(/\D/gi, "@"));

// console.log(str.replace(/\W/gi, "#"));

// console.log(str.replace(/\S/gi, "#"));

// const str = "Please open the book on page №7";

// console.log(str.replace(/[A-Za-z]/gi, "*"));

// console.log(str.replace(/[a-j]/g, "*"));

// console.log(str.replace(/[^a-j]/g, "*"));

// console.log(str.replace(/[^\w|\s]/gi, " "));

// console.log(str.replace(/[^\w|\s]/gi, " "));

// const str = "Unix time dasdasdasd 01.01.1970";

// const result = str.match(/\d{2}\.\d{2}\.\d{4}/gi);

// console.log(result);

// const phone = "+380951112233";
// const phone2 = "+38 (095) 1112233";

// const simlePhoneRegExp = /^\+?(\d+\s?((\(\d+\))|(\d{3}))\s?\d{3}\s?\d{2}\s?\d{2})$/;

// console.log(simlePhoneRegExp.test(phone));
// console.log(simlePhoneRegExp.test(phone2));

// TEST

// let arr =  [2, 3, 4, 5];

// let product = 1;
// for(let i=0;i<arr.length;i++){
//   product *= arr[i];
// }

// console.log()

// let arr = [2, 5, 9, 15, 0, 4];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 3 && arr[i] < 10) {
//     console.log(arr[i]);
//   }
// }

// let arr = [2, 5, 9, 15, 0, 4];

// arr.map(function(item) {
//   if (item > 3 && item < 10) {
//     console.log(item);
//   }
// });

// arr.forEach(function(item) {
//   if (item > 3 && item < 10) {
//     console.log(item);
//   }
// });

// let filterArr = arr.filter(function(item) {
//   return item > 3 && item < 10;
// });
// console.log(filterArr);

// arr.sort(function(a, b) {
//   return b - a;
// });
// console.log(arr);

// let newArr = [];
// for (let key in console) {
//   console.log(key, console[key]);
// }

// let newArr = Object.keys(console);
// console.log(newArr);
// newArr.sort(function(a, b) {
//   a.length - b.length;
// });
// console.log(newArr);

// let newArr = Object.keys(console);
// // newArr.sort((a, b) => a.length - b.length);
// let newArr = arr.map(item => item.toUpperCase());
// console.log(newArr);

// let arr = ["sunday", "monday", "tuesday", "wedn", "thurs", "friday", "sat"];
// let day = arr.indexOf("sat");
// arr.forEach(function(item) {
//   console.log(item);
// });

// console.log(arr[day]);

// let arr = ["sunday", "monday", "tuesday", "wedn", "thurs", "friday", "sat"];
//                // new Date( )функция конструктор
// let day = arr[new Date().getDay()];
// arr.forEach(function(item) {
//   console.log(item);
// });

// console.log(`'Today is ' ${day}`);

// let month = +prompt('Enter the month number');
// let season = '';

// let weekDays = prompt("Enter your language");
// let arrWeek = [];
// if (weekDays === "en") {
//   arrWeek.push("sunday", "monday", "tuesday", "wedn", "thurs", "friday", "sat");
// } else if (weekDays === "ru") {
//   arrWeek.push("вс", "пон", "вторн", "среда", "четверг", "пятн", "суб");
// }
// console.log(arrWeek);

// let a = +prompt("Введите число");
// let b = +prompt("Введите число");

// if (a <= 1 && b >= 3) {
//   console.log(a + b);
// } else {
//   console.log(a - b);
// }
