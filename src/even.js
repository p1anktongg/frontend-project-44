import readlineSync from 'readline-sync';

// Проверяем, четное ли число
const isEven = (num) => {
    return num % 2 === 0;
};

//Основа
const playEvenGame = () => {
    console.log('Answer "yes" if the number is even, otherwise answer "no"');
    const rounds = 3;
    let correctAnswers = 0;

    for (let i = 0; i < rounds; i += 1) {
        //Рандомайзер
        const number = Math.floor(Math.random()*100);

        //Вопрос
        console.log(`Question: ${number}`);
        const userAnswer = readlineSync.question('Your answer: ');

        //Проверка правильности ответа
        const expectedAnswer = isEven(number) ? 'yes' : 'no';
        if  (userAnswer.toLowerCase() !== expectedAnswer) {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
            console.log("Let's try again!");
            return; // завершаем при ошибке
        };

        console.log('Correct!');
        correctAnswers++;

        //Если правильно ответили на все вопросы
        if (correctAnswers === rounds) {
            console.log('Congratulations!');
        }
    };
};
export default playEvenGame;