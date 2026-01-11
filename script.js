let computerChoice = ""
let humanChoice = ""


function getComputerChoice() {
    let decider = Math.random()

    if (decider < 0.33) {
        return "rock"
    } else if (decider >= 0.33 && decider < 0.66) {
        return "paper"
    } 

    return "scissors"
};

function getHumanChoice() {
    return prompt("Select rock, paper, or scissors")
};

function playGame() {
    let humanScore = 0
    let computerScore = 0

    function playRound(humanChoice,computerChoice) {
        humanChoice = humanChoice.toLowerCase()
        if (humanChoice === computerChoice) {
            return console.log("It's a tie!")
        } else if (humanChoice === "rock" && computerChoice === "scissors" 
            || humanChoice === "paper" && computerChoice === "rock" 
            || humanChoice === "scissors" && computerChoice === "paper") {
            ++humanScore
            return console.log("Human wins!")
        }
        ++computerScore
        return console.log("Computer wins!")
    };

    for (let turn = 0; turn < 5; turn++) {
        console.log(computerChoice = getComputerChoice())
        console.log(humanChoice = getHumanChoice())
        playRound(humanChoice, computerChoice)
        console.log(`ROUND ${turn} RESULTS | Humans: ${humanScore} - Computer: ${computerScore}`)
    }
}

playGame()




