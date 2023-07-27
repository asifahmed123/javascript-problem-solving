// Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

const secondSmallest = (num) => {
     let smallest = Infinity;
     let secondSmallest = Infinity;
     for (let i = 0; i < num.length; i++) {
          if(num[i] < smallest){
               secondSmallest = smallest;
               smallest = num[i]
          }
          else if(num[i] < secondSmallest && num[i] !== smallest){
               secondSmallest = num[i];
          }
     }
     return secondSmallest;
}
console.log(secondSmallest([19, 30, 190, 20, 2, 56, 60]));