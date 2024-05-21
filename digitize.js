// DESCRIPTION:
// Given a non-negative integer, return an array / a list of the individual digits in order.
//SOLUTION:
function digitize(n) {
    return n.toString().split('').map(el => +el);
  }