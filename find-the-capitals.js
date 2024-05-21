// DESCRIPTION:
// Instructions
// Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.
//SOLUTION:
var capitals = function (word) {
	// Write your code here
  let res = [];
  for (let i = 0; i < word.length; i++) {
    if (word.charCodeAt(i)>=65 && word.charCodeAt(i)<=90) {
     res.push(word.indexOf(word[i]))
    }
  }  
  return res
  
};