function hello(name) {
  //turn name into lower case
  //Capitalize the first letter
  //if no name, return Hello World

  if (!name) return 'Hello, World!'
  let newName = name.toLowerCase()
  let capName = newName.charAt(0).toUpperCase() + newName.slice(1)
  return `Hello, ${capName}!`
}

// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

// Examples:

// * With `name` = "john"  => return "Hello, John!"
// * With `name` = "aliCE" => return "Hello, Alice!"
// * With `name` not given 
//   or `name` = ""        => return "Hello, World!"