import readlineSync from 'readline-sync';

const runGame = (QaA, instructions) => {
  console.log('Welcome to the Brain Games!');  
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);
  console.log(instructions);

  const rounds = 3;
  let correctAnswers = 0;

  for (let i = 0; i < 0; i += 1) {
    const { question, answer } = QaA();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer.trim() === answer) {
      console.log('Correct!');
      correctAnswers++;  
    } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
        console.log(`Let's try again, ${name}!`);
        return;
    };
  };
  if (correctAnswers === rounds) {
    console.log(`Congratulations!, ${name}!`);
  }
};
export default runGame;