
const Input = document.querySelector("Input");
const Letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const Numbers = [1,2,3,4,5,6,8,9,0];
const Symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '?', '~', '\\'];
const size = 8;

let randomNumber,randomLetter,randomSymbol;

function createPassword(){
let password = " "

 for (i = 1; i <= size ;i++){
  randomLetter = Letters[Math.floor(Math.random()*Letters.length)];
  randomNumber = Numbers[Math.floor(Math.random()*Numbers.length)];
 randomSymbol = Symbols[Math.floor(Math.random()*Symbols.length)];

  const passwordgen = [randomLetter,randomNumber,randomSymbol]
  password += passwordgen[Math.floor(Math.random()*passwordgen.length)]

 }
Input.value = password


}
 function copyPassword(){
  Input.select();
  document.execCommand("copy");
  alert("the password has been copied successfully");
 }
