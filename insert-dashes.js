// DESCRIPTION:
// Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3.
//SOLUTION:
function insertDash(num) {
    let str = num.toString();
      let res = str.split('');
    for (let i = 0; i < str.length; i++) {
      if (+str[i] % 2 == 1 && +str[i + 1] % 2 == 1) {       
         res[i] += '-';       
     }       
    }
    return res.join('')
  }