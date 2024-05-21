// DESCRIPTION:
// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
//SOLUTION: 
function solution(str){
    let arr = [];
    for (let i = 0; i < str.length; i +=2 ) {
      arr.push(str.slice(i, i + 2));
    }
    
    if (str.length % 2 !== 0) {
      arr[arr.length-1] = arr[arr.length-1] + '_';
    }    
    return arr     
}