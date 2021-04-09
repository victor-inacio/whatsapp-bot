import { Message } from "whatsapp-web.js";
const { MessageMedia } = require('whatsapp-web.js');
const path = require('path');

module.exports = {
    description: 'Transforma uma imagem em figurinha.',
    handler: async (command: string, args: string[], message: Message) => {

        if (!message.hasQuotedMsg) 
            return await message.reply('Responda a uma mensagem com imagem para o comando funcionar.')
        const repliedMsg = await message.getQuotedMessage();
        if (!repliedMsg.hasMedia) 
            return await message.reply('Este comando só funciona com imagens.');
        const image = await repliedMsg.downloadMedia();
        await message.reply(image, undefined, {
            sendMediaAsSticker: true,
        });
    }
}