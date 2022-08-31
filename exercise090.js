String.prototype.isUpperCase = function(){
  return /^[^a-z]+$/.test(this)
}

// another solution for change uppercase