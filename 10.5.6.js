myArr = [1,1,1,2,1,1]
console.log(myArr.length)
sameness = 0
for (index = 0; index < (myArr.length - 1); index++) {
  if (myArr[index] == myArr[index + 1]) {
    console.log(sameness)
  } else {
    sameness++
    console.log(sameness)
  }
}
if (sameness === 0) {
  console.log('Все элементы массива одинаковы')
} else {
  console.log('Не все элементы массива одинаковы')
}
