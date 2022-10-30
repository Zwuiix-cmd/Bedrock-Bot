const Player = require("../Player");
module.exports = {
    constructor(client)
    {
        client.on('move_player', (packet) => {
            if(packet.runtime_id === Player.getBotId()){
                Player.setPosition(packet.position);
            }
        });
    },
};