const { LexRuntimeServiceClient } = require("@aws-sdk/client-lex-runtime-service");
const { ConnectClient } = require("@aws-sdk/client-connect");
const { ComprehendClient } = require("@aws-sdk/client-comprehend");
require('dotenv').config();

const lexClient = new LexRuntimeServiceClient({
    region: 'us-east-1', // Cambia a tu región
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    }
});

const connectClient = new ConnectClient({
    region: 'us-east-1', // Cambia a tu región
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    }
});

const comprehendClient = new ComprehendClient({
    region: 'us-east-1', // Cambia a tu región
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    }
});

module.exports = { lexClient, connectClient, comprehendClient };