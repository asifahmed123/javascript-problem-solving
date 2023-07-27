// Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 
// Example Input: [2, -5, 10, -3, 7] Example Output: 19

const inputNumbers = (num) => {
     let sum = 0;
     for(let i = 0; i < num.length; i++){
          const number = num[i]
          if(number > 0){
               sum+= number
          }
     }
     return(sum);
}
console.log(inputNumbers([2, -5, 10, -3, 7]))