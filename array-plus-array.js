// DESCRIPTION:
// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.
//SOLUTION:
function arrayPlusArray(arr1, arr2) {
    return arr1.reduce((acc, cur) => acc + cur, 0) + arr2.reduce((acc, cur) => acc + cur, 0); //something went wrong
  }