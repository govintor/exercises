const reverseLetter = str => {
  let replace = str.replace(/[0-9]/g, "").replace(/[^a-zA-Z0-9]/g, "");
  replace = replace.split("").reverse().join("");

  return replace;
};

// reverse a string and replace the non alphabethic characters