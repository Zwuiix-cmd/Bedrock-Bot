const Player = require("../Player");
module.exports = {
    constructor(client)
    {
        client.on('move_entity', (packet) => {
            if(packet.runtime_entity_id == Player.getOwnerId()) {
                Player.moveTo(packet.position.x, packet.position.y, packet.position.z);
            }
        })
    },
};