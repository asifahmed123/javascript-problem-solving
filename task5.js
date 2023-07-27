//  Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

const calculator = (num1, num2, operator) => {
     if(operator == '+'){
          return num1 + num2;
     }
     else if(operator == '-'){
          return num1 - num2
     }
     else if(operator == '*'){
          return num1 * num2
     }
     else if(operator == '/'){
          return num1 / num2
     }
}

console.log(calculator(6,4,'/'));