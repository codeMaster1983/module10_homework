myArr = [1,1,1,2,1,0,'текст']
console.log(myArr.length)
even = 0
odd = 0
zero = 0
other = 0
for (index = 0; index < (myArr.length); index++) {
  if (myArr[index] === 0) {
    zero++
  } else {
    if (myArr[index] % 2 === 1) {
      odd++
    } else {
      if (myArr[index] % 2 === 0) {
        even++
      } else {
        other++
      }
    }
  }
}
console.log(even)
console.log(odd)
console.log(zero)
console.log(other)
