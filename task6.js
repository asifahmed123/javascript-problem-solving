// Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

const generatePass = (length) => {
     const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
     const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
     const numbers = '0123456789';
     const specialCharacters = '!@#$%^&*()-_=+[]{}|;:,.<>?';
     const allCharacters = uppercaseLetters + lowercaseLetters + numbers + specialCharacters;
     
     const randomNumberIndex = Math.floor(Math.random() * numbers.length)
     let password = numbers[randomNumberIndex];

     for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * allCharacters.length);
          password += allCharacters[randomIndex]
     }
     return password;
}
console.log(generatePass(8));