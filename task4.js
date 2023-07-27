// Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

//  Example Input: ([1, 3, 6, 8, 11, 15], 9) Example Output: [1, 2] (numbers at indices 1 and 2: 3 + 6 = 9)

const numbers = (sortedArray, targetValue) => {
     let arr = [];
     for (let i = 0; i < sortedArray.length; i++) {
          for(j = i+1; j<sortedArray.length; j++){
               if(sortedArray[i] + sortedArray[j] == targetValue){
                    arr = [i, j]
               }
          }
     }
     return(arr);
}
console.log(numbers([1, 3, 6, 8, 11, 15], 9)); 