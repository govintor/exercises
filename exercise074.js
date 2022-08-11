function modifyMultiply (str,loc,num) {
  //1. Find the location(loc) of the word from str
  //how: turn str into array with split(' ')[loc]
  //2. Multiply the word by num as array element 
  //how: loop, push(word)
  //3. add hyphen
  //how:join('-')
  let word = str.split(' ')[loc] //'string'
  let arrOfWord = []
  for(let i = 0; i < num; i++){
    arrOfWord.push(word)
  }
  return arrOfWord.join('-')
}

