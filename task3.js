// Write a JavaScript program to find the most frequent element in an array and return it. 
// Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5] Example Output: 3

const mostFrequent = (arr) => {
     let maxCount = 0;
     let maxFreqElement;
     for(let i = 0; i < arr.length; i++){
          let count  = 0;
          for(let j = 0; j<arr.length; j++){
               if(arr[i] == arr[j]){
                    count++
               }
          }
          if(count > maxCount){
               maxCount = count
               maxFreqElement = arr[i]
          }
     }
     console.log(maxFreqElement);
}

mostFrequent([3, 5, 2, 5, 3, 3, 1, 4, 5])