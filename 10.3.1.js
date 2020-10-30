value = prompt('Введи значение')
console.log(typeof value)
num = +value
console.log(typeof num)
if (num !== num) {
  alert('Это не число')
} else {
  if (num % 2 === 0){
  alert('Это четное число')
  } else {
  alert('Это нечетное число')
  }
}
