const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function greet() {
    rl.question("Enter your name: ", (name) => {
        console.log(`Good Morning ${name}`);
        rl.close();
    });
}

module.exports = {greet} ; 