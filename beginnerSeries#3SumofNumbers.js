// DESCRIPTION:
// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.
//SOLUTION:
function getSum(a, b)
{
  let arr = [];  
  if (a > b) {
  	for (i = b; i <= a; i++) {
    	arr.push(i)
    }
  }
   for (i = a; i <=b; i++) {
     arr.push(i)
   }
  return arr.reduce((acc, cur) => acc + cur, 0)
}