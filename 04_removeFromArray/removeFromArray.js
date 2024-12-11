const removeFromArray = function (array = [], ...values) {
  return array.filter((value) => values.indexOf(value) == -1);
};

// Do not edit below this line
module.exports = removeFromArray;
