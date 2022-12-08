//urok 11
// const obj = {
// 	name: 'Pavel',
// 	age: 25,
// 	isMarride: false
// };

// // console.log(obj.name); // estj dva obrawenija k klju4u 4tob polu4itj zna4enie v dannom slu4ae name -klju4 "pavel" zna4enie
// console.log(obj ['name']);

// let arr = ["plum.png", "orange.jpg", 6, "apple.bmp", {}, []];
// console.log(arr[1]);



//urok 12
// const arr = ['a', 'b', 'c'];
// arr[10] = '3456';
// console.log(arr);


// const arrObj = {
// 	0: 'a',
// 	1: 'b',
// 	2: 'c',
// 	abc: {
// 		df: [{}, {}],
// 		def: {

// 		}
// 	}
// };

// const b = 'b';

// // arrObj.b = '1234';
// arrObj[b] = [];

// // console.log(arrObj['b']);
// console.log(arrObj.b);

// // const obj = {a: 1, b: 2};
// const obj = {
// 	'Anna': 500,
// 	'Alice': 800
// };
// console.log(obj);



//urok 13
// alert('Hello'); // vivodit modaljnoe okno 4tob predupreditj o 4em to

// const result = confirm('are you here?'); //mozhno zadatj vopros
// console.log(result);

// const answer = +prompt('Vam estj 18?', '18');
// console.log(answer + 5);


// const answers = [];
// answers[0] = prompt('kak vashe imja?', '');
// answers[1] = prompt('kak vashe familija?', '');
// answers[2] = prompt('skolko vam let?', '');

// console.log(typeof(answers));



//urok 14
// const category = 'toys';
// console.log(`https://someurl.com/${category}/5`);

// const user = 'Pavel';
// alert(`Privet, ${user}`);



//urok 15
// console.log('arr' + ' - object');
// console.log(4 + +'5');


// let incr = 10,
// 	decr = 10;
// // ++incr; // esli ++ stout do to eto prefficsnaja , esli oparatori stojat posle eto postfiksnja (primer: ++incr : incr++)
// // --decr;
// console.log(++incr);
// console.log(--decr);

// console.log(5 % 2);

// console.log(2 + 2 * 2 !== '6');

// && operator i
// || operator ili

// const isCheked = false,
// 	isClosed = false;
// 	console.log(isCheked || !isClosed);


//urok 15 i 16 rabota s git

//urok 17 github

//urok 18 hhs https

//urok 19 praktika na4inaem sozdavatj prilozhenie

/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
		- count - сюда передается ответ на первый вопрос
		- movies - в это свойство поместить пустой объект
		- actors - тоже поместить пустой объект
		- genres - сюда поместить пустой массив
		- privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
		- 'Один из последних просмотренных фильмов?'
		- 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате:
		movies: {
				'logan': '8.1'
		}

Проверить, чтобы все работало без ошибок в консоли */

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
// 	count: numberOfFilms,
// 	movies: {},
// 	actors: {},
// 	genres: [],
// 	privat: false
// };

// const a = prompt('Один из последних просмотренных фильмов?', ''),
// 			b = prompt('На сколько оцените его?', ''),
// 			c = prompt('Один из последних просмотренных фильмов?', ''),
// 			d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);


//urok 20

// if (1 === 2) {
// 	console.log('ok!');
// } else {
// 	console.log('error');
// }

// const num = 50;

// if (num < 49) {
// 	console.log('error');
// } else if (num > 100) {
// 	console.log('mnogo');
// } else {
// 	console.log('ok!');
// }
// (num === 50) ? console.log('ok!') : console.log('error');


// const num = 49;

// switch (num) {
// 	case 49:
// 		console.log('neverno 1');
// 		break;
// 	case 100:
// 		console.log('neverno 2');
// 		break;
// 	case 50:
// 		console.log('v to4ku');
// 		break;
// 	default:
// 		console.log('ne v etot raz');
// 		break;
// }


//urok 21

// const hamburger = 5;
// const fries = 1;

// if (hamburger && fries) {
// 	console.log('I am full');
// }

// const hamburger = 3;
// const fries = 1;
// const cola = 1;

// console.log(hamburger === 3 && cola && fries);

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && 'dadwad');

// if (hamburger === 3 && cola === 1 && fries) {
// 	console.log('All ppl are full');
// } else {
// 	console.log('We are go away');
// }

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
// 	console.log('All ppl are happy');
// } else {
// 	console.log('We are go away');
// }

// console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets);

// let johnReport, alexReport, samReport, mariaReport = 'done';

// console.log(johnReport || alexReport || samReport || mariaReport);

// console.log(!0);

// domawka Что выведет в консоль код?
//
// console.log( NaN || 2 || undefined ); //2
// console.log( NaN && 2 && undefined ); // NaN
// console.log( 1 && 2 && 3 ); // 3
// console.log( !1 && 2 || !3 ); // false
// console.log( 25 || null && !3 ); // 25
// console.log( NaN || null || !3 || undefined || 5); //5
// console.log( NaN || null && !3 && undefined || 5); //5
// console.log( 5 === 5 && 3 > 1 || 5); // true
//
//Выполняется ли условие? Done!
// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }


//Выполняется ли условие? Done!

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if (hamburger || cola || fries === 3 || nuggets) {
//    console.log('Done!')
// }


//Выполняется ли условие? zna4enie false. ni4ego ne vivodit esli ubratj else.

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// } else {
// 	console.log('Sorry but false');
// }


//urok 22

// let num = 50;

// while (num <= 55) {
// 	console.log(num);
// 	num++;
// }

// do {
// 	console.log(num);
// 	num++;
// }
// while (num < 55);

// for (let i = 1; i < 10; i++) {
// 	if (i === 6) {
// 		// break; //ostanavlivet cikl dohodja do 6 i vivodit v etom slu4aet v console 5
// 		continue; // propuskaet 6 i idet dalwe poka ne upretsja v nashem slu4ae v 10 . vivoditj v console 9;
// 	}
// 	console.log(i);
// }


//urok 23

// for (let i = 0; i < 3; i++) {
// 	console.log(i);
// 	for (let j = 0; j < 3; j++) {
// 		console.log(j);
// 	}
// }

// *
// **
// ***
// ****
// *****
// ******

// let result = '';
// const length = 7;

// for (let i = 1; i < length; i++) {

// 	for (let j = 0; j < i; j++) {
// 		result += '*';
// 	}
// 	result += '\n';
// }
// console.log(result);


// first: for (let i = 0; i < 3; i++) {
// 	console.log(`First level: ${i}`);
// 	for (let j = 0; j < 3; j++) {
// 		console.log(`Second level: ${j}`);
// 		for (let k = 0 ; k < 3; k++) {
// 			if (k === 2) continue first;
// 			console.log(`Third level: ${k}`);
// 		}
// 	}
// }

// zadanie posle 23 uroka

//При помощи цикла выведите числа от 5 до 10 в консоль. 5 и 10 включительно. Цикл можно использовать любой

// Место для первой задачи
// function firstTask() {
// 	for (let i = 5; i <= 10; i++) {
// 		console.log(i);
// 	}
// }
// firstTask();

//При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке (20, 19, 18...). Когда цикл дойдет до числа 13 - остановить весь цикл
// Место для второй задачи
// function secondTask() {
// 	for (let i = 20; i >= 10; i--) {
// 		if (i === 13) break;
// 		console.log(i);
// 	}
// }
// secondTask();


//При помощи цикла for выведите чётные числа от 2 до 10 включительно
// Место для третьей задачи
// function thirdTask() {
// 	for (let i = 2; i <= 10; i++) {
// 		if (i % 2 === 0) {
// 			console.log(i);
// 		}
// 	}
// }
// thirdTask()

//Перепишите цикл  for на вариант с while. Результат должен остаться точно таким же. Не создайте бесконечный цикл! Иначе браузер может зависнуть.

// Цикл, который нужно переписать: v while

// for (let i = 2; i <= 16; i++) {
// 	if (i % 2 === 0) {
// 		continue;
// 	} else {
// 		console.log(i);
// 	}
// }

// zada4a perepisanaja vishe na while
// function fourthTask() {
// 	let i = 2;
// 	while (i <= 16) {
// 		if (i % 2 === 0) {
// 			i++;
// 			continue;
// 		} else {
// 			console.log(i);
// 		}
// 		i++;
// 	}
// }
// fourthTask();


//Заполните массив цифрами от 5 до 10 включительно. Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0]

// function fifthTask() {
// 	const arrayOfNumbers = [];

// 	for (let i = 5; i <= 10; i++) {
// 		arrayOfNumbers[i - 5] = i;
// }
// console.log(arrayOfNumbers);
// 	return arrayOfNumbers;
// }
// fifthTask();


/*
1.Заполните новый массив (result) числами из старого (arr). Количество элементов в массиве можно получить как arr.length, а к элементам обращаемся все так же: arr[0], arr[1] и тд.
Должен получиться точно такой же массив

function firstTask() {
		const arr = [3, 5, 8, 16, 20, 23, 50];
		const result = [];

		for (let i = 0; i < arr.length; i++) {
				result[i] = arr[i];
		}

		console.log(result);
		return result;
}
firstTask();

2.Измените данный массив так, чтобы все числа были увеличены в 2 раза, а если попадается строка строка - то к ней было добавлено " - done".
Для определения типа данных используйте typeof();
Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]

function secondTask() {
		const data = [5, 10, 'Shopping', 20, 'Homework'];

		for (let i = 0; i < data.length; i++) {
				if (typeof(data[i]) === 'number') {
						data[i] = data[i] * 2;
				} else if (typeof(data[i]) === 'string') {
						data[i] = `${data[i]} - done`;
				}
		}

		console.log(data);
		return data;
}
secondTask();

3.Разверните массив data наоборот при помощи цикла и запишите данные в массив result.
Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ] 

function thirdTask() {
		const data = [5, 10, 'Shopping', 20, 'Homework'];
		const result = [];

		for (let i = 1; i <= data.length; i++) {
				result[i - 1] = data[data.length - i]
		}

		console.log(result);
		return result;
}
thirdTask();
*/

//domawka . otveti i viprosi vishe ili v zadanii na Udemy 
// // Место для первой задачи
// function firstTask() {
// 	// Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
// 	const arr = [3, 5, 8, 16, 20, 23, 50];
// 	const result = [];

// 	// Пишем решение вот тут


// 	// Не трогаем
// 	return result;
// }

// // Место для второй задачи
// function secondTask() {
// 	// Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
// 	const data = [5, 10, 'Shopping', 20, 'Homework'];

// 	// Пишем решение вот тут


// 	// Не трогаем
// 	return data;
// }

// // Место для третьей задачи
// function thirdTask() {
// 	// Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
// 	const data = [5, 10, 'Shopping', 20, 'Homework'];
// 	const result = [];

// 	// Пишем решение вот тут


// 	// Не трогаем
// 	return result;
// }


// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result)

//urok 24

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
// 	count: numberOfFilms,
// 	movies: {},
// 	actors: {},
// 	genres: [],
// 	privat: false
// };

/*
(a != null && b != null && a != '' && b != '' && a.length < 50)
читается так 
если а не отменили и б не отмена и а не пустая строка и б не пустая строка и длина а не превышает 50...то
делаем дальнейшие действия которые прописали  
*/

// Cпособ первый (цикл do while);
/*
let i = 0;

do {
	let a = prompt('Один из последних просмотренных фильмов?', '');
	let b = prompt('На сколько оцените его?', '');
	i++;
	if (a != null && b != null && a != '' && b != '' && a.length < 50) {
		personalMovieDB.movies[a] = b;
		console.log('Done');
	} else {
		console.log('error');
		i--;
	}
} while (i < 2);

if (personalMovieDB.count < 10) {
	console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
	console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
	console.log("Вы киноман");
} else {
	console.log("Произошла ошибка");
}
console.log(personalMovieDB);
*/

// Cпособ второй (цикл while);
/*
let i = 0;

while (i < 2) {
	let a = prompt('Один из последних просмотренных фильмов?', '');
	let b = prompt('На сколько оцените его?', '');
	i++;

	if (a != null && b != null && a != '' && b != '' && a.length < 50) {
		personalMovieDB.movies[a] = b;
		console.log('Done');
	} else {
		console.log('error');
		i--;
	}
}

if (personalMovieDB.count < 10) {
	console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
	console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
	console.log("Вы киноман");
} else {
	console.log("Произошла ошибка");
}
console.log(personalMovieDB);
*/


// Cпособ третий (цикл FOR);
/*
for (let i = 0; i < 2; i++) {
	const a = prompt('Один из последних просмотренных фильмов?', ''),
		b = prompt('На сколько оцените его?', '');

	if (a != null && b != null && a != '' && b != '' && a.length < 50) {
		personalMovieDB.movies[a] = b;
		console.log('done');
	} else {
		console.log('error');
		i--;
	}
}

if (personalMovieDB.count < 10) {
	console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
	console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
	console.log("Вы киноман");
} else {
	console.log("Произошла ошибка");
}
console.log(personalMovieDB);
*/


//Urok 25 funkcii strelo4nie ES6
// let num = 20;

// function showFirstMessage(text) {
// 	console.log(text);
// 	let num = 10;
// }

// showFirstMessage("hello world");
// console.log(num);

// function calc(a, b) {
// 	return (a + b);
// }

// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(10,  6));

// function ret() {
// 	let num = 50;
// 	return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);

// const logger = function() {
// 	console.log('Hello')
// };
// logger();

// const calc = (a, b) => { 
// 	return (a + b);
// };
// console.log(2, 2);

//urok 26 

// const usdCurr = 28;
// const eurCurr = 32;
// const rubCurr = 1.7;

// function convert(amount, curr) {
// 	console.log(curr * amount);
// }

// convert(100, usdCurr);
// convert(100, eurCurr);
// convert(100, rubCurr);


//urok 27

// const usdCurr = 28;
// const discount = 0.9;

// function convert(amount, curr) {
// 	return curr * amount;
// }

// function promotion(result) {
// 	console.log(result * discount);
// }

// const res = convert(500, usdCurr);
// promotion(res);

// function test() {
// 	for (let i = 0; i < 5; i++) {
// 		console.log(i);
// 		if (i === 3) return;
// 	}
// 	console.log('Done');
// }
// test();

// function doNothing() {};
// console.log(doNothing() === undefined);


// proverka znanij 

// function sayHello(name) {
// 	return `Привет ${name}`;
// }
// console.log(sayHello('Пашка'))

// function returnNeighboringNumbers(num) {
// 	return [num - 1, num, num + 1];
// }

// console.log(returnNeighboringNumbers(6));

// function getMathResult(num, times) {
// 	if (typeof(times) !== 'number' || times <= 0) {
// 		return num;
// 	}

// 	let str = '';

// 	for (let i = 1; i <= times; i++) {
// 		if (i === times) {
// 			str += `${num * i}`
// 		} else {
// 			str += `${num * i}---`;
// 		}
// 	}
// 	return str;
// }

// console.log(getMathResult(2, 3));


//urok 27 МЕТОДЫ И СВОЙСТВА СТРОК И ЧИСЕЛ

// const str = 'test';

// console.log(str.toUpperCase());
// console.log(str.length);

// const fruit = 'Some fruit';
// console.log(fruit.indexOf('fruit'));

// const logg = 'Hello world';
// console.log(logg.slice(6, 11));
// console.log(logg.slice(6));
// console.log(logg.substring(6, 11));
// console.log(logg.substr(6, 5));

// const num = 12.2;
// console.log(Math.round(num));

// const test = '12.2px';
// console.log(parseInt(test));
// console.log(parseFloat(test));


//urok 29. Практика , ч3. Используем функции
/* Задание на урок:
1) Первую часть задания повторить по уроку
2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы
3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres
P.S. Функции вызывать не обязательно */


// let numberOfFilms;

// function start() {
// 	numberOfFilms = +prompt('Сколько фильмов вы уже просмтрели?', '');

// 	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
// 		numberOfFilms = +prompt('Сколько фильмов вы уже просмтрели?', '');
// 	}
// }
// start();

// const personalMovieDB = {
// 	count: numberOfFilms,
// 	movies: {},
// 	actors: {},
// 	genres: [],
// 	privat: false
// };


// function rememberMyFilms() {
// 	for (let i = 0; i < 2; i++) {
// 		const a = prompt('Один из последних просмотренных фильмов?', ''),
// 			b = prompt('На сколько оцените его?', '');

// 		if (a != null && b != null && a != '' && b != '' && a.length < 50) {
// 			personalMovieDB.movies[a] = b;
// 			console.log('done');
// 		} else {
// 			console.log('error');
// 			i--;
// 		}
// 	}
// }
// rememberMyFilms();

// function detectPersonalLevel() {
// 	if (personalMovieDB.count < 10) {
// 		console.log("Просмотрено довольно мало фильмов");
// 	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
// 		console.log("Вы классический зритель");
// 	} else if (personalMovieDB.count >= 30) {
// 		console.log("Вы киноман");
// 	} else {
// 		console.log("Произошла ошибка");
// 	}
// }
// detectPersonalLevel();

// function showMyDB(hidden) {
// 		if (!hidden) {
// 			console.log(personalMovieDB);
// 		}
// }

// showMyDB(personalMovieDB.privat);

// function writeYourGenres() {
// 	for (let i = 1; i <= 3; i++) {
// 		personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
// 	}
// }
// writeYourGenres();















