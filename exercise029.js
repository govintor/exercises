function cockroachSpeed(s) {
  // use. math.fllor
  //  convert kph into cps 1.08 kpm into 30 cps
  // 1000 (cm) / 36 (s) = 27.77 * 1.08
   return Math.floor(s * 1000 /36)
}

// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

// For example:

// 1.08 --> 30
// Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.