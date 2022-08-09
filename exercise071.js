function twoSort(s) {
  //Sort the array of strings
  //how: sort()
  //return the 1st value in a string
  //how: assign index 0 to a new variable newStr
  //add *** in between each letter
  //how1: turn newStr into array with split(''), 
  //how2: use for loop and padEnd(4, '*') but avoid the last index
  s.sort()
  let newStr = s[0].split('') //bitcoin ==> [b, i, t, c, o, i, n], length == 7
  for(let i = 0; i < newStr.length - 1; i++){
    newStr[i] = newStr[i].padEnd(4, '*')
  }
  return newStr.join('')
}

