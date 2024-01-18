// // varian_1
// let answer1, answer2, answer3;
// answer1 = prompt("Do you like apple?", "yes/no");
// answer2 = prompt("Do you like drive", "yes/no");
// answer3 = prompt("Do you like swim?", "yes/no");
// console.log("Your answer:");
// console.log("1. " + answer1);
// console.log("2. " + answer2);
// console.log("3. " + answer3);

// variant_2
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question(`Do you like apple?, yes/no `, (answer1) => {
    rl.question(`Do you like drive?, yes/no `, (answer2) => {
        rl.question(`Do you like swim?, yes/no `, (answer3) => {
            console.log(`Your answer:\n1. ${answer1}\n2. ${answer2}\n3. ${answer3}`);
          rl.close();  
        });
    });
});