a = prompt('Введи значение')

//для строки ничего не меняем
a = +0 // число
a = !!a // логическое значение
a = undefined // неопределено

b = typeof a
console.log(b)
switch (b) {
  case "number":
    alert('Это число')
    break
  case "string":
    alert('Это строка')
    break
  case "boolean":
    alert('Это логическое значение')
    break
  default:
    alert('Не определено')
}
