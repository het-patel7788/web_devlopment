let real_guess = Math.floor(Math.random() * 10) + 1;
let user_guess = prompt("Enter your guess between 1 to 10 or type 'quit'");

while (true) {
    if (user_guess === "quit") {
        console.log("You quit the game.");
        break;
    }

    let guess_num = Number(user_guess);

    if (isNaN(guess_num)) {
        user_guess = prompt("Invalid input. Please enter a number or type 'quit'");
        continue;
    }

    if (guess_num === real_guess) {
        console.log("Your guess is correct! It is", real_guess);
        break;
    } else if (guess_num < real_guess) {
        user_guess = prompt("Your guess is too low. Try again or type 'quit'");
    } else if (guess_num > real_guess) {
        user_guess = prompt("Your guess is too high. Try again or type 'quit'");
    }
}

