module.exports = {
    constructor(client)
    {
        const Player = require('../player/Player');
        client.on('resource_packs_info', (packet) => {
            packet.texture_packs.forEach((value) => {
                Player.addPackUuid(value.uuid);
            });
        });
    },
};