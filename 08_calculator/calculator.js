const add = function (first, second) {
  return (first += second);
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

const multiply = function (array) {
  let multiplies = 1;
  for (let i = 0; i < array.length; i++){
    multiplies *= array[i];
  }
  return multiplies;
};

const power = function (base, power) {
  return Math.pow(base, power);
};

const factorial = function (num) {
  let factorial = 1;
  for (let i = 0; i < num; i++){
    factorial *= num-i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
