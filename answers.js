let num = 24;
let number;           
if (num % 2 == 0) {
  number = "even";
} else {
    number = "odd";
}
console.log(number);

let flower = "rose";
let tree = "apple";
let temp = flower;
flower = tree;
tree = temp;
console.log(flower);
console.log(tree);


//Challenge Question

function myFunction(Input) {
  if(Input.length % 2 == 0) {
    Input = "even";
  } else {
    Input = "odd";
  }
  return Input;
}
let input = myFunction("institute");
console.log(input); 



