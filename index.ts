import { Message } from "whatsapp-web.js";
const { Client } = require('whatsapp-web.js');
const fs = require('fs')
const qrCode = require('qrcode-terminal');
const sessionData = fs.existsSync('./session.json') ? require('./session.json') : undefined;
const client = new Client({
    session: sessionData,
    puppeteer: {
        headless: false,
    },
});
const handlers = require('./handlers');

client.on('qr', (qr: any) => {
    qrCode.generate(qr, { small: true })
})

client.on('ready', () => {
    console.log('READY!')
})

client.on('authenticated', (session: any) => {
    console.log('AUTENTICADO')
    if (fs.existsSync('session.json')) return;
    fs.writeFileSync('session.json', JSON.stringify(session));
})

client.on('message_create', handlers.messageHandler)

client.initialize()