// programmer A
function upperJS(value) {
  return value.toUpperCase();
}

// programmer B
const resultBJS = upperJS("abc");
console.log(resultBJS);

// programmer C
const resultCJS = upperJS(123);
console.log(resultCJS);
