module.exports = {
    constructor(client)
    {
        const Player = require("../Player");
        client.on('add_player', (packet) => {
            if(packet.username == Player.getOwnerUsername()){
                Player.setOwnerId(packet.runtime_id);
            }
        })
    },
};