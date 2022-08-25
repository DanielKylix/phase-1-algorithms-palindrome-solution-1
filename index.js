const reversingString = (word) => {
  const splittingWord = word.split('')
  const reversingWord = splittingWord.reverse()
  const joinedWord = reversingWord.join ('')
  return joinedWord
}
  

function isPalindrome(word) {
  // Write your algorithm here
  const reversedString = reversingString (word);
  if (word === reversedString) {
    return true;
  }
  else {
    return false;
  }
}

/* 
  Add your pseudocode here
  reverse the input
  if input === reversed input
    return true
  else
    return false
*/

/*
  Add written explanation of your solution here
  
  The basicality of the algorithm is to reverse a string and compare it with the original string, and check if they are equivalent or not.
  For easier readability I added a function to reverse our string.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
