const Player = require("../player/Player");
module.exports = {
    constructor(client)
    {
        client.on('add_player', (packet) => {
            if(packet.username == Player.getOwnerUsername()){
                Player.setOwnerId(packet.runtime_id);
            }
        })
    },
};