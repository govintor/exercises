String.prototype.isUpperCase  = function(_str){
  return this.split("").every(function(c){return c === c.toUpperCase();});
}

//changing to uppercase