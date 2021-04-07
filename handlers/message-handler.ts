import { Message } from "whatsapp-web.js";

const config = require('../config.json');
const commandHandler = require('./command-handler');

module.exports = (message: Message): void|undefined => {

    console.log('MENSAGEM:', message.body)

    if (isCommandMessage(message)) return commandHandler(message);

}

function isCommandMessage(message: Message): Boolean {
    const msgBody: String = message.body;
    const firstChar: String = msgBody.slice(0, 1);
    return firstChar === config.prefix;
}