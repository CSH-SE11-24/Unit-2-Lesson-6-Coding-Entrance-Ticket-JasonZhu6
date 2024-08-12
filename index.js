// In this entrance ticket, you will be building a "guess the number" game. 
// Create a new variable and put a number from 1-100 in
let pcNum = 4

// Prompt the user to guess the number
// Cast the user input to a number
let userNum = parseInt(prompt("Guess the number: "))

// Create a new variable called attempts and set it to 0
let attempts = 0

// Create a while loop that runs while the user guess is not equal to your number
// In the while loop, prompt the user to guess the number again (remember to cast)
// In the while loop, increase the attempts by 1
// In the while loop, write an if statement that does the following
// If the user guess is higher, say "Too high!"
// If the user guess is lower, say "Too low!"
// If the user guess is right, say "You got it!"
while (userNum !== pcNum) {
  userNum = parseInt(prompt("Guess the number again: "))

  attempts++

  if (userNum > pcNum) {
    console.log("Too high! ")
  } else if (userNum < pcNum) {
    console.log("Too low! ")
  } else if (userNum === pcNum) {
    console.log("You got it! ")
  }
}

// After the while loop, print "It took (attempts) attempts" 
console.log(`It took ${attempts} attempts. `)