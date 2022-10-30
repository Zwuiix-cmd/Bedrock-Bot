const Player = require("../player/Player");
module.exports = {
    constructor(client)
    {
        client.on('packet', (packet) => {
            //console.log(packet)
        })
    },
};