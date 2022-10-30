const Player = require("../Player");
module.exports = {
    constructor(client)
    {
        setInterval(function () {
            Player.moveTo(Player.getPosition().x, Player.getPosition().y-0.5, Player.getPosition().z);
        }, 10000);
        setInterval(function () {
            Player.moveTo(Player.getPosition().x, Player.getPosition().y+0.5, Player.getPosition().z);
        }, 15000);
    },
};