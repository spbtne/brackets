module.exports = function check(str, bracketsConfig) {
  // your solution
  let arrStr = str.split('');
  const arrLength = arrStr.length;
  if (arrLength % 2 != 0 ) { return false}
for (let y = 0; y < bracketsConfig.length; y += 1) {
for (let i = 0; i < arrStr.length; i += 1)
{
  let bracket = bracketsConfig[y];
  if (arrStr[i] == bracket[0] && arrStr[i+1] === bracket[1])
  {
    let removeAreaLeft = i;
    let removeAreaRight = i+1;
    let amount = 2;
    while ((arrStr[removeAreaLeft] == arrStr[removeAreaLeft - 1]) && (arrStr[removeAreaRight] == arrStr[removeAreaRight + 1]))
    {
      removeAreaLeft -= 1;
      removeAreaRight += 1;
      amount += 2
      }
    
    arrStr.splice(removeAreaLeft, amount);
    i = -1;
    y = 0;
    }
  }
  
}
if (arrStr.length !== 0) {return false} else {return true}
}
