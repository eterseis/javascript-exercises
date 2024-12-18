const fibonacci = function (member) {
  if (member < 0) {
    return "OOPS";
  }
  let fibo = [0, 1, 1];
  for (let i = 3; fibo.length <= member; i++) {
    fibo.push(fibo[i - 1] + fibo[i - 2]);
  }
  return fibo[member];
};

// Do not edit below this line
module.exports = fibonacci;
