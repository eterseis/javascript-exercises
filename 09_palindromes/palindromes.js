const palindromes = function (string) {
  const validCharacters = "abcdefghijklmnopqrstuvwxyz0123456789";

  const cleanedString = string
    .toLowerCase()
    .split("")
    .filter((character) => validCharacters.includes(character))
    .join("");

  const reversedString = cleanedString.split('').reverse().join('');
  const isPalindrome = cleanedString === reversedString;
  return isPalindrome;
};
palindromes("Was it a Cat I Saw?");
// Do not edit below this line
module.exports = palindromes;
