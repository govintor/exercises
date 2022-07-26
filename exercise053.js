  function noBoringZeros(n) {
  //1)turn into array
  //how: String() and split()
  //2)How do we let the computer know how many 0 to remove?
  //how: use findLastIndex() ? findLast() to look for element !== 0
  //3)then join() array into string then Number()
  n = String(n).split('').reverse()
  let lastIndex = n.findIndex(e => Number(e) !== 0)
  return +n.slice(lastIndex).reverse().join('')
}
// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105
// Zero alone is fine, don't worry about it. Poor guy anyway