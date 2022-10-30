// PACKET
const Text = require('./packet/Text');
const Move = require('./packet/Move');
const BreakBlock = require('./packet/BreakBlock');

const bedrock = require('bedrock-protocol');
const fs = require("fs");

let username;
let hostname;
let serverPort;
let client;
let position;

let botId;

let ownerId;
let ownerUsername;

let lastMessage = "Aucun message récent!";
let packUuid;

module.exports = {

    /**
     * @param user
     * @param ip
     * @param port
     * @param owner
     */
    connect(user, ip, port, owner = "Unknown")
    {
        username=user;
        hostname=ip;
        serverPort=port;
        ownerUsername=owner;

        client = bedrock.createClient({host: hostname, port: serverPort, skipPing: true, offline: false, username: username, connectTimeout: 2500, flow: 'msal' });

        const eventFiles = fs.readdirSync('./listeners/').filter(file => file.endsWith('.js'));
        for (const file of eventFiles) {
            const event = require(`./listeners/${file}`);
            event.constructor(client);
        }
    },

    disconnect()
    {
        client.close();
    },

    /**
     * @param message
     */
    sendMessage(message)
    {
        Text.create(client, "chat", true, client.username, '', '', message)
    },

    setBotId(runtime_entity_id)
    {
        botId=runtime_entity_id;
    },

    getBotId()
    {
        return botId;
    },

    /**
     * @param pos
     */
    setPosition(pos)
    {
      position=pos;
    },

    getPosition()
    {
        return position;
    },

    /**
     * @param id
     */
    setOwnerId(id)
    {
        ownerId=id;
    },

    getOwnerId()
    {
        return ownerId;
    },

    getOwnerUsername()
    {
        return ownerUsername;
    },

    /**
     * @param message
     */
    setLastMessage(message)
    {
        lastMessage=message;
    },

    resetMessage()
    {
        lastMessage=null;
    },

    getLastMessage()
    {
      return lastMessage;
    },

    /**
     * @param message
     */
    setPackUuid(message)
    {
        packUuid=message;
    },

    /**
     * @param message
     */
    addPackUuid(message)
    {
        packUuid += `${message}\n`;
    },

    getPackUuid()
    {
        return packUuid;
    },

    getClient()
    {
      return client;
    },

    moveTo(x, y, z)
    {
        Move.create(client, x, y, z);
    },

    breakBlock(x, y, z)
    {
        BreakBlock.create(client, x, y, z);
    }
};