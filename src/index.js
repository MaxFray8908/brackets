module.exports = function check(str, bracketsConfig) {
  let start = [];
  let end = [];
  let similar = [];
  let count = [];
  
  for (let item of bracketsConfig) {
      if (item[0] === item[1]) {
          similar.push(item[0]);
      }
      start.push(item[0]);
      end.push(item[1]);
  }
  
  for (let index = 0; index < str.length; index++) {
      
      if (start.includes(str[index])) {
          if (similar.includes(str[index]) && count[count.length - 1] === start.indexOf(str[index])) {
              count.pop();
              continue;
          }
          count.push(start.indexOf(str[index]));
      }
      else {
          let poisk = count.indexOf(end.indexOf(str[index]), count.length - 1);
          if (poisk !== -1) {
              count.pop();
          }
          else {
              return false;
          }
      }
  }
  
  return count.length === 0 ? true : false;
}
