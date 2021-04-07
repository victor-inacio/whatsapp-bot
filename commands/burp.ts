import { Message } from "whatsapp-web.js";
const { MessageMedia } = require('whatsapp-web.js');
const path = require('path');

module.exports = {
    description: 'Arroto do Pedro',
    handler: async (command: string, args: string[], message: Message) => {

        const pedroBurpPath = path.resolve(__dirname, '../media/audios/pedro-burp.ogg')
        const pedroBurpAudio = MessageMedia.fromFilePath(pedroBurpPath);
        const chat = await message.getChat();
        await chat.sendMessage(pedroBurpAudio, {
            sendAudioAsVoice: true
        });        

    }
}