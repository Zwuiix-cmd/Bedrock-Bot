const Player = require("../Player");
module.exports = {
    constructor(client)
    {
        client.on('start_game', (packet) => {
            Player.setPosition(packet.player_position);
        })
    },
};