const questions = [
    "¿Cuál fue el monto de tu última transacción?",
    "¿En qué ciudad realizaste tu última compra?",
    "¿Cuál es el nombre del comercio donde realizaste tu última compra?",
    "¿Cuál es el monto de tu transacción más alta en el último mes?",
    "¿En qué fecha realizaste tu última transacción?",
    "¿Cuál es el nombre del beneficiario de tu última transferencia?",
    "¿Cuál es el monto de tu última transferencia?",
    "¿En qué ciudad se encuentra el cajero donde realizaste tu último retiro?",
    "¿Cuál es el monto de tu último retiro en efectivo?",
    "¿Cuál es el nombre del comercio donde realizaste tu última compra en línea?",
    "¿Cuál es el monto de tu última compra en línea?",
    "¿En qué fecha realizaste tu última transferencia?",
    "¿Cuál es el nombre del banco del beneficiario de tu última transferencia?",
    "¿Cuál es el monto de tu última compra en un supermercado?",
    "¿En qué ciudad realizaste tu última transferencia?"
];

const getRandomQuestions = (num) => {
    const shuffled = questions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
};

module.exports = { getRandomQuestions };