// Closures-Замыкания

// const parentFunc = function(){
// 	let i = 0;

// 	const childFunc = function(){
// 		i++
// 		console.log(i);
// 	}
// 	return childFunc;
// }

// const iteratorFunc = parentFunc();

// iteratorFunc();
// iteratorFunc();
// // console.log(i);

// Recursion - Рекурсия

// const cycle = function(arr, i=0){
// 	if(i<arr.length){
// 		console.log(arr[i]);
// 		cycle(arr, i + 1);
// 	}else return null;
// }

// cycle(['Jack','Jim','Doe',]);

// Распаковка многомерного массива

const arrNums =[1,[2],[[3],[4]]];
const newArr = [];

const arrToFloat = function(arr,i = 0){
	if(i >= arr.length) return;
	if(Array.isArray(arr[i])) arrToFloat(arr[i])
	else newArr.push(arr[i]);
	arrToFloat(arr, i+1);
}

arrToFloat(arrNums);
console.log(newArr);
// console.log(arrNums.flat(Infinity));