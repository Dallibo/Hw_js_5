// let count = +prompt("Введите колличество раз:");
// let str = 0;
// while (str < count) {
//     document.write("#");
//     str++;
// }

// let numb = +prompt("Введіть число:");
// let i = numb;
// while (i >= 0) {
//     document.write(i + "<br>");
//     i--;
// }

// let numb2 = +prompt("Введите число:");
// let numb3 = +prompt("Введите степень:");
// let result = Math.pow(numb2, numb3);
// alert(`Результат: ${result}`);

let numb4 = +prompt("Введите первое число:");
let numb5 = +prompt("Введите второе число:");
let min = Math.min(numb4, numb5);
let del = [];
let i = 1;
while (i <= min) {
  if (numb4 % i === 0 && numb5 % i === 0) {
    del.push(i);
  }
  i++;
}
alert ("Общие делители чисел " + numb4 + " и " + numb5 + ": " + del.join(", "));


