module.exports = {
    constructor(client)
    {
        client.on('text', (packet) => {
            const Player = require('../Player');
            Player.setLastMessage(packet.message);
        });
    },
};