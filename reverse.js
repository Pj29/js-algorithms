/**
 * Returns the string with the characters in reverse order
 * @param {string} text the string to be reversed
 */
function reverse(text) {
  // Base case: if the string is empty or has only one character, return it as is
  if (text.length <= 1) {
    return text;
  }

  const firstChar = text[0];
  const restOfString = text.slice(1);

  // Recursively reverse the rest of the string
  const reversedRest = reverse(restOfString);

  return reversedRest + firstChar;
}

module.exports = reverse;
