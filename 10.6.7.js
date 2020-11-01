let myArr = [1,1,1,2,1,0,'текст','15', null, NaN, undefined, true, false, []]
// console.log(myArr.length)
let even = 0, odd = 0, zero = 0;

for (let index = 0; index < myArr.length; index++) { // Скобки здесь лишние
  if (typeof myArr[index] === "number" && !isNaN(myArr[index])) {
    if (myArr[index] === 0) {
      zero++;
    } else if (myArr[index] % 2 === 0) {
      even++;
    } else {
      odd++;
    }
  }
}
console.log(`Четных значений: ${even}`);
console.log(`Нечетных значений: ${odd}`);
console.log(`Нулей: ${zero}`);

// Задание выполнено не верно. В условии написано, что массив может содержать абсолютно любые элементы: не только числа и строки, там может быть и null, NaN, undefined, true, false и т.д. Поэтому важно правильно отсеять только числовые значения и считать четные\нечетные\нули только среди чисел. Выше показала, как это можно сделать