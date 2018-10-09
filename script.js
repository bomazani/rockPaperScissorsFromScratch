
let userChoice = prompt("Do you choose Rock, Paper, or Scissors?");
let computerChoiceArray=["Rock","Paper","Scissors"];

let randomNum=Math.floor(Math.random() * 3);
let computerChoice = computerChoiceArray[randomNum];

let choice1 = userChoice;
let choice2 = computerChoice;
console.log(choice1);
console.log(choice2);

function compare(choice1, choice2) {
    if (choice1 === choice2) {
        return ("The result is a tie.");
    }
    if (choice1 === "Rock") {
        if (choice2 === "Scissors") {
            return ('Rock Wins!');
        } else {
            return ('Paper Wins!');
        }
    }
    if (choice1 === "Paper") {
        if (choice2 === "Rock"){
            return ('Paper Wins!');
        } else {
            return ('Scissors Wins!');
        }
    }
    if (choice1 === "Scissors") {
            if (choice2 === "Paper"){
                return ('Scissors Wins!');
        } else {
            return ('Rock Wins!');
        }
    }
}

console.log(compare(choice1, choice2));
document.write(compare(choice1,choice2));
