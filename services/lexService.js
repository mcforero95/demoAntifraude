const { PostTextCommand } = require("@aws-sdk/client-lex-runtime-service");
const { lexClient } = require('../config/awsConfig');

const askSecurityQuestions = async (sessionAttributes, userId, inputText) => {
    const params = {
        botAlias: 'TestBotAlias', // Reemplaza 'YourBotAlias' con el alias de tu bot
        botName: 'FraudValidationBot',   // Reemplaza 'YourBotName' con el nombre de tu bot
        inputText,
        userId,
        sessionAttributes
    };

    const command = new PostTextCommand(params);
    const response = await lexClient.send(command);
    return response;
};

module.exports = { askSecurityQuestions };