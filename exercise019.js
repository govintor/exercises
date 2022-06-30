function correct(string){
    //5 == S; 0 == O; 1 == I
  //Turn string into array, and loop through individual item
  //Use conditional in the loop to replace number to the corresponding alphabet
  //Join array into string and return it
  let arr = string.split('')
  for(let i = 0; i < arr.length; i++){
    if(arr[i] == " "){
      arr[i] == ' '
    }else if(arr[i] == 5){
      arr[i] = 'S'
    }else if (arr[i] == 0){
      arr[i] = 'O'
    }else if (arr[i] == 1) {
      arr[i] = 'I'
    }else{
      arr[i] = arr[i]
    }
  }
  return arr.join('')
}