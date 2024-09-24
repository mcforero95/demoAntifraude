const { StartOutboundVoiceContactCommand } = require("@aws-sdk/client-connect");
const { connectClient } = require('../config/awsConfig');
require('dotenv').config();

const initiateCall = async (phoneNumber) => {
    const params = {
        ContactFlowId: process.env.CONTACT_FLOW_ID, // Toma el ID del flujo de contacto desde el archivo .env
        DestinationPhoneNumber: phoneNumber,
        InstanceId: process.env.INSTANCE_ID,  // Toma el ID de la instancia desde el archivo .env
        SourcePhoneNumber: process.env.SOURCE_PHONE_NUMBER // Toma el número de teléfono de origen desde el archivo .env
    };

    console.log("Initiating call with params:", params);

    try {
        const command = new StartOutboundVoiceContactCommand(params);
        const response = await connectClient.send(command);
        console.log("Call initiated successfully:", response);
        return response;
    } catch (error) {
        console.error("Error initiating call:", error);
        if (error.name === 'DestinationNotAllowedException') {
            console.error("The destination number is not allowed. Please check the country/region restrictions and the source phone number.");
        }
        throw error;
    }
};

module.exports = { initiateCall };