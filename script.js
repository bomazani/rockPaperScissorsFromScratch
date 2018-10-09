let CapFirstLtr = (string) => string.charAt(0).toUpperCase() + string.slice(1);
let randomNum=Math.floor(Math.random() * 3);

let userChoice = prompt("Do you choose Rock, Paper, or Scissors?");
let choice1 = CapFirstLtr(userChoice);

let computerChoiceArray=["Rock","Paper","Scissors"];
let computerChoice = computerChoiceArray[randomNum];
let choice2 = computerChoice;

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

var node1 = document.createElement("div");
let textnode1 = document.createTextNode("Do you choose Rock, Paper, or Scissors?");
node1.appendChild(textnode1);
document.getElementById("instrux").appendChild(textnode1);


var node2 = document.createElement("div");
let textnode2 = document.createTextNode(compare(choice1,choice2));
node2.appendChild(textnode2);
document.getElementById("results").appendChild(textnode2);
