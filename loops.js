function forLoop(array){
  var array = [] // create an empty array
  for (let i = 0; i < 25; i++) { // set initial value to 1. execute the function block and increment value by 1 until it reaches 25.
    if (i === 1) {
      array.push("I am 1 strange loop.") // If the value is equal to 1 then push the string to array.
    }
    else {
        array.push("I am ${i} strange loop."); // Else push this string to the array.
      }
  }
  return array;
}
