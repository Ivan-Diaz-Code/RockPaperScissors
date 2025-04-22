
    let humanScore = 0;
    let computerScore = 0;
    let counter = 0;

    const computerSelection = getComputerChocie();
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => { button.addEventListener("click", () => {
        playRound(getHumanChoice(button.value),computerSelection)
        });
    });

    /*
    if (humanScore > computerScore) {
    console.log("You win");
    } else if (computerScore > humanScore) {
        console.log("You lose!");
    } else {
        console.log("It's a tie!");
    }
    */

      
    function getComputerChocie() {
        let choice = "";
        let choiceNum = -1;
        choiceNum = Math.random(choiceNum);
        if (choiceNum < 0.334) {
          choice = "rock";
        } else if (choiceNum >= 0.334 && choiceNum < 0.667) {
          choice = "paper";
        } else {
          choice = "scissors";
        }
        return choice;
    }

      function getHumanChoice(val) {
        console.log(val);
        return val;
      }
      
      function playRound(humanChoice, computerChoice) {
        let result = -1;
        if (humanChoice === computerChoice) {
          console.log("tie!");
          return result;
        }

        if (humanChoice === "rock") {
          if (computerChoice === "paper") {
            result = 0;
            console.log("you lose! rock loses to paper");
            return result;
          } else if (computerChoice === "scissors") {
            result = 1;
            console.log("you win! rock beats scissors");
            return result;
          }
        } else if (humanChoice === "paper") {
          if (computerChoice === "scissors") {
            result = 0;
            console.log("you lose! paper loses to scissors");
            return result;
          } else if (computerChoice === "rock") {
            result = 1;
            console.log("you win! paper beats rock");
            return result;
          }
        } else if (humanChoice === "scissors") {
          if (computerChoice === "rock") {
            result = 0;
            console.log("you lose! scissors loses to rock");
            return result;
          } else if (computerChoice === "paper") {
            result = 1;
            console.log("you win! scissors beats paper");
            return result;
          }
        }
      }