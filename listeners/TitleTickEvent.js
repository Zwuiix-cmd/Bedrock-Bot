const Title = require('node-bash-title');
module.exports = {
    constructor(client)
    {
        client.on('packet', (packet) => {
            Title(`${client.username} | ${client.startGameData.engine} | ${client.options.host} to ${client.startGameData.world_name}(${client.startGameData.game_version}) | ${packet.data.name}`);
        });
    }
};