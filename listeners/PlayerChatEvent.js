module.exports = {
    constructor(client)
    {
        client.on('text', (packet) => {
            const Player = require('../player/Player');
            Player.setLastMessage(packet.message);
        });
    },
};