let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#user-score");
const computerScorepara = document.querySelector("#computer-score");


const genComputerchoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx]
};

const drawGame = () => {
    //console.log("game was draw.");
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#0d2942";
};

const showwinner = (userwin,userChoice, computerChoice) => {
    if(userwin) {
        userScore++;
        userScorepara.innerText = userScore;
       // console.log("you win!");
        msg.innerText = `You win! Your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        computerScore++;
        computerScorepara.innerText = computerScore;
        console.log("you lose");
        msg.innerText = `You lose ${computerChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}
const playGame = (userChoice) => {
    //console.log("choice was clicked",userChoice);
    //Generate Computer choice 
    const computerChoice = genComputerchoice();
    //console.log("computer choice =",computerChoice);

if (userChoice === computerChoice) {
    //draw game
    drawGame();
} else {
    let userwin = true;
    if(userChoice === "rock") {
        //scissors ,paper
        computerChoice === "paper" ? false: true;
    } else if(userChoice === "paper") {
        //rock,scissors
        userwin = computerChoice === "scissors" ? false : true;
    } else {
        //rock,paper
         userwin = computerChoice === "rock" ? false : true;
    }
    showwinner(userwin,userChoice,computerChoice);
}
};

choices.forEach((choice) => {
    //console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");// prblm 
        //console.log("choice was clicked",userChoice);
        playGame(userChoice);
    });
});
