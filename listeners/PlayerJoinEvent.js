const Logs = require('../utils/Logs');
let colors = require('colors');
const Player = require("../Player");

module.exports = {
    constructor(client)
    {
        client.on("spawn", () => {
            let position = `${Math.round(client.startGameData.player_position.x)}, ${Math.round(client.startGameData.player_position.y)}, ${Math.round(client.startGameData.player_position.z)}`;
            Logs.log(`${colors.cyan(`${client.username}`)}[${client.options.host}:${client.options.port}/${colors.yellow(`${client.options.version}:${client.options.protocolVersion}`)}] logged in with the entity ID ${colors.yellow(client.startGameData.runtime_entity_id)} to ${position}!`);
            Player.setBotId(client.startGameData.runtime_entity_id);
        });
    }
};