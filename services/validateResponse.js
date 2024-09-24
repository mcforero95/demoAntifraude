const { BatchDetectSentimentCommand } = require("@aws-sdk/client-comprehend");
const { comprehendClient } = require('../config/awsConfig');

const validateResponse = async (question, answer) => {
    const params = {
        TextList: [answer],
        LanguageCode: 'es' // Código de idioma para español
    };

    const command = new BatchDetectSentimentCommand(params);
    const result = await comprehendClient.send(command);
    const sentiment = result.ResultList[0].Sentiment;

    // Lógica para determinar si la respuesta es correcta
    const isCorrect = sentiment === 'POSITIVE'; // Ejemplo simple, ajusta según tu lógica

    return isCorrect;
};

module.exports = { validateResponse };