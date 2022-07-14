function hello(name) {
  //turn name into lower case
  //Capitalize the first letter
  //if no name, return Hello World

  if (!name) return 'Hello, World!'
  let newName = name.toLowerCase()
  let capName = newName.charAt(0).toUpperCase() + newName.slice(1)
  return `Hello, ${capName}!`
}

