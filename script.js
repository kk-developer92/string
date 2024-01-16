let num = "12rub"
let num2 = "12.458745847584754875 $"

console.log(parseInt(num)); //выведет 12
console.log(parseFloat(num2));

console.log( parseInt(Math.random() * 10) ); // рандомное число


let number = 52.9
console.log( Math.round(number)  ) // округляет 
console.log( Math.ceil(number)  ) // округляет в большую сторону
console.log( Math.floor(number)  ) // округляет в меньшую сторону



console.log( Math.min(10,56,1,3,5,7,8,12) ); /* мин */
console.log( Math.max(10,56,1,3,5,7,8,12) ); /* макс */


let program1 = +prompt("Введите число 1")
let program2 = prompt("Введите число 2")
console.log(typeof(program1) + typeof(program2));


let longNum = 12.994755775776565886576;
// console.log(longNum.toFixed(1));
longNum = longNum.toFixed(3).toString()
console.log(typeof(longNum));



let arr = [10.45, 9.519, 85.56, 22, 6.26, 98.245, 15, 34.2]

let newArr = Math.max(...arr)
console.log(newArr);