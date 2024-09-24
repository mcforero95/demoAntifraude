const { askSecurityQuestions } = require('../services/lexService');
const { initiateCall } = require('../services/connectService');
const { getRandomQuestions } = require('../utils/questionBank');
const { validateResponse } = require('../services/validateResponse');
const transactions = require('../data/mockTransactions');

const handleSuspiciousTransaction = async (req, res) => {
    const { userId } = req.body;

    // Buscar la transacción simulada por userId
    const transaction = transactions.find(t => t.userId === userId);
    if (!transaction) {
        return res.status(404).send({ message: 'Transacción no encontrada' });
    }

    try {
        // Iniciar llamada
        await initiateCall(transaction.phoneNumber);

        // Obtener preguntas aleatorias
        const questions = getRandomQuestions(5);

        // Interactuar con Amazon Lex
        let correctAnswers = 0;
        for (const question of questions) {
            const lexResponse = await askSecurityQuestions({}, userId, question);
            const isCorrect = await validateResponse(question, lexResponse.message);
            if (isCorrect) {
                correctAnswers++;
            }
        }

        // Lógica de validación de respuestas
        if (correctAnswers >= 4) {
            await askSecurityQuestions({}, userId, 'Cuenta desbloqueada');
            res.status(200).send({ message: 'Cuenta desbloqueada' });
        } else if (correctAnswers >= 3) {
            const additionalQuestions = getRandomQuestions(5);
            for (const question of additionalQuestions) {
                const lexResponse = await askSecurityQuestions({}, userId, question);
                const isCorrect = await validateResponse(question, lexResponse.message);
                if (isCorrect) {
                    correctAnswers++;
                }
            }
            if (correctAnswers >= 9) {
                await askSecurityQuestions({}, userId, 'Cuenta desbloqueada');
                res.status(200).send({ message: 'Cuenta desbloqueada' });
            } else {
                await askSecurityQuestions({}, userId, 'Caso escalado al área de fraudes');
                res.status(200).send({ message: 'Caso escalado al área de fraudes' });
            }
        } else {
            await askSecurityQuestions({}, userId, 'Caso escalado al área de fraudes');
            res.status(200).send({ message: 'Caso escalado al área de fraudes' });
        }
    } catch (error) {
        console.error("Error handling suspicious transaction:", error);
        res.status(500).send({ error: error.message });
    }
};

module.exports = { handleSuspiciousTransaction };