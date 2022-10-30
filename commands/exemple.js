module.exports = {
    name: "exemple",
    aliases: ['ex1'],

    /**
     * @param message
     * @param args
     */
    /* Message = packet.message & args[0] = command & args[number] = args */
    execute(message, args)
    {
        const Player = require("../Player");
        if(!message.includes(Player.getOwnerUsername()))return;
        Player.sendMessage(`Hi @${Player.getOwnerUsername()}! <3`);
    }
};