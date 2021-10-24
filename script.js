const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper' || userInput === 'bomb') {
      return userInput;
    } else {
      console.log('Error!');
    }
  }
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
      return 'rock';
      case 1:
      return 'paper';
      case 2:
      return 'scissors';
    }
  }
  const knowTheWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return 'Tie game!';
    }
    if (userChoice === 'bomb') {
      return 'Awesome, you won!';
    }
    if (userChoice === 'rock') {
      if(computerChoice === 'paper') {
        return 'Computer won!';
      } else {
        return 'Awesome, you won!';
      }
    }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Computer won!';
    } else {
      return 'Awesome, you won!';
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Computer won!';
    } else {
      return 'Awesome, you won!';
    }
  }
  }
  const playGame = () => {
    const userChoice = getUserChoice('bomb');
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw:' + computerChoice);
    console.log(knowTheWinner(userChoice, computerChoice));
  }
  playGame();