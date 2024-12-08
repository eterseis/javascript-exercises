const reverseString = function (words) {
  let string = "";
  for (let i = 0; i < words.length; i++) {
    string += words.at(words.length - 1 - i);
  }
  return string;
};

// Do not edit below this line
module.exports = reverseString;
