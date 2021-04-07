import { Message } from "whatsapp-web.js";
const commands = require('../commands');

module.exports = (message: Message): void => {

    const msgBody = message.body;
    const withoutPrefix = msgBody.slice(1);
    const commandAndArgs = withoutPrefix.split(' ');
    const args: Array<string> = [...commandAndArgs];
    const command = <string>args.shift();
    console.log('COMANDO RECEBIDO:', command, args);

    console.log(command, args)

    if (commandExists(command)) {
        callCommand(command, args, message);
    }
}

function callCommand(command: string, args: Array<string>, message: Message) {
    commands[command](command, args, message);
}

function commandExists(command: string): Boolean {
    return !!commands[command]
} 