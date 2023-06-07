let count = +prompt("Введите колличество раз:");
let str = 0;
while (str < count) {
    document.write("#");
    str++;
}


let numb = +prompt("Введіть число:");
let i1 = numb;
while (i1 >= 0) {
    document.write(i1 + "<br>");
    i1--;
}


let numb2 = +prompt("Введите число:");
let numb3 = +prompt("Введите степень:");
let result = Math.pow(numb2, numb3);
alert(`Результат: ${result}`);


let numb4 = +prompt("Введите первое число:");
let numb5 = +prompt("Введите второе число:");
let min = Math.min(numb4, numb5);
let del = [];
let i2 = 1;
while (i2 <= min) {
  if (numb4 % i2 === 0 && numb5 % i2 === 0) {
    del.push(i2);
  }
  i2++;
}
alert("Общие делители чисел " + numb4 + " и " + numb5 + ": " + del.join(", "));


let numb6 = +prompt("Введіть число для обчислення факторіалу");
let factorial = 1;
let i = 1;
while (i <= numb6) {
    factorial *= i;
    i++;
}
alert("Факторіал числа " + numb6 + " дорівнює " + factorial);


let answer;
do {
  answer = +prompt("Решите пример: 2 + 2 * 2");
} 
while (answer !== 6);
alert("Правильно! Ответ будет 6.");


let numb7 = +prompt("Скільки разів потрібно поділити 1000 на 2, щоб отримати число менше 50?");
let number = 1000;
let count2 = 0;
do {
  number /= 2;
  count2++;
} while (number >= 50);
alert("Отримане число: " + number);
alert("Кількість поділів: " + count2);


let numb10 = +prompt("Введите число");
let result3 = "";
for (let i3 = 1; i3 <= 100; i3++) {
  if (i3 % numb10 === 0) {
    result3 += i3 + " ";
  }
}
alert("Числа, кратыне " + numb10 + ":\n" + result);


let numb11 = +prompt("Введіть ваше максимальне число:");
let numb12 = +prompt("Введіть ваше мінімальне число:");
let result2 = "";
for (let i = numb12; i <= numb11; i += 4) {
  result2 += i + " ";
}
alert("Кожен 4-ий елемент в діапазоні від " + numb12 + " до " + numb11 + ":\n" + result2);


let numb13 = +prompt("Введите число:");
let numb14 = true;
if (numb13 === 1) {
  numb14 = false;
} 
else if (numb13 > 1) {
  for (let i = 2; i < numb13; i++) {
    if (numb13 % i === 0) {
      numb14 = false;
      break;
    }
  }
} 
else {
  numb14 = false;
}
if (numb14) {
  alert(numb13 + " это простое число.");
} else {
  alert(numb13 + "это не простое число.");
}


