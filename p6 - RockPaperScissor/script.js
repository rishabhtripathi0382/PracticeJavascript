document.addEventListener('DOMContentLoaded', () => {
    const playerChoiceElement = document.getElementById('player-choice');
    const computerChoiceElement = document.getElementById('computer-choice');
    const gameResultElement = document.getElementById('game-result');
  
    const choices = ['Rock', 'Paper', 'Scissors'];
    const buttons = document.querySelectorAll('.choices button');
  
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const playerChoice = button.textContent;
        const computerChoice = getComputerChoice();
        const result = getResult(playerChoice, computerChoice);
  
        playerChoiceElement.textContent = playerChoice;
        computerChoiceElement.textContent = computerChoice;
        gameResultElement.textContent = result;
      });
    });
  
    function getComputerChoice() {
      const randomIndex = Math.floor(Math.random() * choices.length);
      return choices[randomIndex];
    }
  
    function getResult(playerChoice, computerChoice) {
      if (playerChoice === computerChoice) {
        return "It's a tie!";
      }
  
      if (
        (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
        (playerChoice === 'Paper' && computerChoice === 'Rock') ||
        (playerChoice === 'Scissors' && computerChoice === 'Paper')
      ) {
        return 'You win!';
      }
  
      return 'You lose!';
    }
  });
  