/* zdesj ja proboval dobratsja k raznim massivam
v dannom slu4aet const myData = myArray[2][1];
vidast nam 8
 */


// const myArray = [
//   [1, 2, 3],//0
//   [4, 5, 6],//1
//   [7, 8, 9],//2 tak zhe i v massive na4inaetsja klju4 s 0 v nashem slu4ae 1 eto cifra 8
//   [[10, 11, 12], 13, 14],//3
// ];

// const myData = myArray[2][1];

// console.log(myData);

// const myArray = [["John", 23], ["dog", 3]];
// myArray.shift(); // virezali pervij massiv 
// myArray.unshift(['Paul', 35]) // i vstavili v nego v na4alo drugoi massiv

// console.log(myArray);

// function timesFive(num) {
//   return num * 5;
// }
// const answer = timesFive(5);
// console.log(answer);

// function nextInLine(arr, item) {
//    arr.push(item);
//   return arr.shift(); 
// }

// // Setup
// let testArr = [1, 2, 3, 4, 5];

// // Display code
// console.log("Before: " + JSON.stringify(testArr));
// console.log(nextInLine(testArr, 6));
// console.log("After: " + JSON.stringify(testArr));



// function testLogicalAnd(val) {
//   // Only change code below this line


//     if (val <= 50 &&  val >= 25) {
//       return "Yes";
//     }


//   // Only change code above this line
//   return "No";
// }

// console.log(testLogicalAnd(10));
// console.log(testLogicalAnd(24));
// console.log(testLogicalAnd(25));
// console.log(testLogicalAnd(30));


// function testElseIf(val) {
//   if (val > 10) {
//     return "Greater than 10";
//   }

//   else if (val < 5) {
//     return "Smaller than 5";
//   } else {
//     return "Between 5 and 10";
//   }
// }
// console.log(testElseIf(11));
// console.log(testElseIf(4));
// console.log(testElseIf(5));

// function testSize(num) {
//   // Only change code below this line
//   if (num < 5) {
//     return 'Tiny';
//   } else if (num < 10) {
//     return 'Small';
//   } else if (num < 15) {
//     return 'Medium'
//   } else if (num < 20) {
//     return 'Large'
//   } else {
//     return 'Huge';
//   }
// }

// console.log(testSize(19));

// const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

// function golfScore(par, strokes) {
//   // Only change code below this line
//   if (strokes === 1) {
//     return names[0];
//   } else if (strokes <= par - 2) {
//     return names[1];
//   } else if (strokes == par - 1) {
//     return names[2]
//   } else if (strokes == par) {
//     return names[3]
//   } else if (strokes == par + 1) {
//     return names[4]
//   } else if (strokes == par + 2) {
//     return names[5]
//   } else if (strokes >= par + 3) {
//     return names[6]
//   }
// }

// console.log(golfScore(5, 4)); // pervoe zna4enie par , vtoroe zna4enie strokes
// console.log(golfScore(4, 10));
// console.log(golfScore(4, 6));



// function switchOfStuff(val) {
//   let answer = "";

//   switch (val) {
//     case 'a':
//       answer = 'apple';
//       break;
//     case 'b':
//       answer = 'bird';
//       break;
//     case 'c':
//       answer = 'cat';
//       break;
//     default:
//       answer = 'stuff';
//   }

//   return answer;
// }

// switchOfStuff("a");

/**
 let result = "";
switch (val) {
  case 1:
  case 2:
  case 3:
    result = "1, 2, or 3";
    break;
  case 4:
    result = "4 alone";
}
 */

/* metod switch

function chainToSwitch(val) {
  let answer = "";
  // Only change code below this line

  switch (val) {
    case 'bob':
      answer = 'Marley';
      break
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
      break
    case 'John':
    case 156:
      answer = "";
      break;
  }
  return answer;
}

// metod if

function chainToSwitch(val) {
  let answer = "";
  // Only change code below this line

  if (val === "bob") {
    answer = "Marley";
  } else if (val === 42) {
    answer = "The Answer";
  } else if (val === 1) {
    answer = "There is no #1";
  } else if (val === 99) {
    answer = "Missed me by this much!";
  } else if (val === 7) {
    answer = "Ate Nine";
  }

  // Only change code above this line
  return answer;
}

chainToSwitch(7);

chainToSwitch(7);
 */

// let count = 0;

// function cc(card) {
//   switch (card) {
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//     case 6:
//       count++;
//       break;
//     case 10:
//     case "J":
//     case "Q":
//     case "K":
//     case "A":
//       count--;
//       break;
//   }

//   var holdBet = 'Hold';
//   if (count > 0) {
//     holdBet = 'Bet';
//   }
//   return count + " " + holdBet;
// }

// cc(2); cc(3); cc(7); cc('K'); cc('A');




// Место для первой задачи
// function calculateVolumeAndArea(length) {
//   if (typeof (length) !== 'number' || length < 0 || !Number.isInteger(length)) {
//     return "При вычислении произошла ошибка";
//   }
//   let volume = 0;
//   area = 0;
//   volume = length * length * length;
//   // length ** 3 - это тоже самое, что и выше или варианты через цикл.  ** - это оператор степени,
//   area = 6 * (length * length);

//   return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
// }

// console.log(calculateVolumeAndArea(5));

// // Место для второй задачи
// function getCoupeNumber(seatNumber) {
//   if (typeof (seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
//     return "Ошибка. Проверьте правильность введенного номера места";
//   }
//   if (seatNumber === 0 || seatNumber > 36) {
//     return "Таких мест в вагоне не существует";
//   }

//   return Math.ceil(seatNumber / 4);
// }

// console.log(getCoupeNumber(33));

// function getTimeFromMinutes(minutesTotal) {
//   if (typeof (minutesTotal) !== 'number' || minutesTotal < 0 || !Number.isInteger(minutesTotal)) {
//     return "Ошибка, проверьте данные";
//   }

//   const hours = Math.floor(minutesTotal / 60);
//   const minutes = minutesTotal % 60;

//   let hoursStr = '';

//   switch (hours) {
//     case 0:
//       hoursStr = 'часов';
//       break;
//     case 1:
//       hoursStr = 'час';
//       break;
//     case 2:
//     case 3:
//     case 4:
//       hoursStr = 'часа';
//       break;
//     default:
//       hoursStr = 'часов';
//   }

//   return `Это ${hours} ${hoursStr} и ${minutes} минут`;
// }
//  console.log(getTimeFromMinutes(450));




//  function findMaxNumber(a, b, c, d) { 
//   if (typeof(a) !== 'number' || typeof(b) !== 'number' || typeof(c) !== 'number' || typeof(d) !== 'number') {
//       return 0;
//   } else {
//       return Math.max(a, b ,c, d);
//   }
// }

// console.log(findMaxNumber(1, 5, 6.6, 10.5));
// console.log(findMaxNumber(1, 5, '6', '10'));

// function fib(num) {
//   if (typeof (num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
//     return "";
//   }

//   let result = '';
//   let first = 0;
//   let second = 1;

//   for (let i = 0; i < num; i++) {
//     if (i + 1 === num) {
//       result += `${first}`;
//       // Без пробела в конце
//     } else {
//       result += `${first} `;
//     }

//     let third = first + second;
//     first = second;
//     second = third;
//   }

//   return result;
// }

// console.log(fib(5));

