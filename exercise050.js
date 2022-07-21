function sumArray(array) {
  //use slice or splice
  //1) remove the lowest and the highest numbers (1 each) in the array
  //how: use sort() to get the array sorted and remove the lowest and highest with slice()
  //2) sum the remaining of the array
  //how: use reduce()
  //3) condition: if no array, return 0
  return !array ? 0 :
          array.sort((small, big) => small - big)
          .slice(1, array.length - 1)
          .reduce((acc, c) => acc + c, 0)
}