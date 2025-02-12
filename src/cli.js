import readlineSync from 'readline-sync';
const welcome = () => {
// Спрашиваем имя у пользователя
    const userName = readlineSync.question('May I have your name? ');
// Приветствуем по имени
    console.log(`Hello, ${userName}!`);
};
export default welcome;