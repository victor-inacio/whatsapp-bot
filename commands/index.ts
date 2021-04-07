export interface Command {
    description?: string,
    handler(): void,
}

module.exports = {
    help: require('./help'),
    burp: require('./burp')
}