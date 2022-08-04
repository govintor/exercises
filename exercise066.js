function sumDigits(number) {
    //9936 ==> '-9936' => [-9, 9, 3, 6] => n
  //how: String(number) and turn it into array using split("")
  //sum the whole array and make each number absolute value
  //how: reduce() use Math.abs()
  return String(Math.abs(number))
    .split('')
    .reduce((acc, n) => acc + Math.abs(n), 0)
}
