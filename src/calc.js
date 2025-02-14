const operators = ['+', '-', '*'];

const getRandomNumber = (min = 1, max = 100) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomOperator = () => {
    const index = Math.floor(Math.random() * operators.length);
    return operators[index];
};
const getQuestionAndAnswer = () => {
    const num1 = getRandomNumber();
    const num2 = getRandomNumber();
    const operator = getRandomOperator();
    const question = `${num1} ${operator} ${num2}`;
    const answer = calculate(num1, num2, operator);
    return { question, answer };
};

const calculate = (num1, num2, operator) => {
    switch(operator) {
        case '+':
            return String(num1 + num2);
        case '-':
            return String(num1-num2);
        case '*':
            return String(num1 * num2);
        default:
            throw new Error('Unknown operator');
    };

};
export default { getQuestionAndAnswer, instructions: 'What is the result of the expression?' };

