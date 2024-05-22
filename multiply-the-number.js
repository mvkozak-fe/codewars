// DESCRIPTION:
// Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers
//SOLUTION:
function multiply(number){
    let n;
    if (number < 0) {
      n = (-number).toString().length;
    } else {
      n = number.toString().length;
    }
    
    return number * Math.pow(5, n);
}