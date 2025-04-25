
    let humanScore = 0;
    let computerScore = 0;
    let counter = 0;

   
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => { button.addEventListener("click", () => {
      const score = document.querySelector(".score")
      let answer = playRound(getHumanChoice(button.value), getComputerChocie());
        if(computerScore >=5 || humanScore >=5){
          if(computerScore > humanScore)
          {
            score.textContent = "(" + humanScore + " , " + computerScore + ")\n You Lose";
          }else{
            score.textContent = "(" + humanScore + " , " + computerScore + ")\n You Win";
          }
          
        }else{
          if (answer === 0 && computerScore <= 5) {
            computerScore++;
            score.textContent = "(" + humanScore + " , " + computerScore + ")";
          } else if (answer === 1 && humanScore <= 5) {
            humanScore++;
            score.textContent = "(" + humanScore + " , " + computerScore + ")";
          }
          
        }
        
        });
    });

    

      
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
        const computer = document.querySelector(".computer");
        computer.textContent = choice;
        return choice;
    }

      function getHumanChoice(val) {
        const user = document.querySelector(".user");
        user.textContent = val;
        return val;
      }
      
      function playRound(humanChoice, computerChoice) {
        let result = -1;
        const textResult = document.querySelector(".result");
        if (humanChoice === computerChoice) {
          textResult.textContent = "tie";
          return result;
        }

        if (humanChoice === "rock") {
          if (computerChoice === "paper") {
            result = 0;
            textResult.textContent = "lose";
            return result;
          } else if (computerChoice === "scissors") {
            result = 1;
            textResult.textContent = "win";
            return result;
          }
        } else if (humanChoice === "paper") {
          if (computerChoice === "scissors") {
            result = 0;
            textResult.textContent = "lose";
            return result;
          } else if (computerChoice === "rock") {
            result = 1;
            textResult.textContent = "win";
            return result;
          }
        } else if (humanChoice === "scissors") {
          if (computerChoice === "rock") {
            result = 0;
            textResult.textContent = "lose";
            return result;
          } else if (computerChoice === "paper") {
            result = 1;
            textResult.textContent = "win";
            return result;
          }
        }
      }