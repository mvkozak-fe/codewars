// DESCRIPTION:
// I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.
//SOLUTION:
function generateShape(integer){
    let str = '';
    for (let i = 0; i<integer; i++) {
      for (let j = 0; j<integer; j++) {
        str += "+";
      }
      str+='\n';
    }
    
    return str.slice(0, -1);
  }