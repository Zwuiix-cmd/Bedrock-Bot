const { glob } = require('glob')
const { promisify } = require('util');
const fs = require("fs");
const Player = require("../Player");
const globPromise = promisify(glob)
module.exports = {
    constructor(client)
    {
        const Player = require("../Player");
        client.on('text', async packet => {
            let message = packet.message;

            if(packet.source_name === client.username) return;
            if(!message.includes(Player.getCommandPrefix()))return;

            const commandMsg = message.split('?');
            const args = commandMsg[1].split(/ +/g);

            const eventFiles = fs.readdirSync(`${process.cwd()}/commands/`).filter(file => file.endsWith('.js'));
            for (const file of eventFiles) {
                const event = require(`${process.cwd()}/commands/${file}`);
                if (message.includes(event.name)){
                    event.execute(message, args);
                    return;
                }
                event.aliases.forEach((aliases) => {
                    if(message.includes(aliases)){
                        event.execute(packet.message, args);
                        return;
                    }
                });
            }
        })
    },
};