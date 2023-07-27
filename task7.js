//  Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

const convertRoman = (arr) => {
     const roman = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
     let num = 0;
     for (let i = 0; i < arr.length; i++) {
          const current = roman[arr[i]];
          const next = roman[arr[i + 1]];
               (current < next) ? (num -= current) : (num += current)
     }
     return num
}

console.log(convertRoman('IX'))