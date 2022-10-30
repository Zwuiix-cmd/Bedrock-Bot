module.exports = {
    constructor(client)
    {
        client.on("spawn", () => console.info("["+client.username+"] => has been successfully connected!"));
    }
};