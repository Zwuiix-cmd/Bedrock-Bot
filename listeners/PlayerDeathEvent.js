module.exports = {
    constructor(client)
    {
        client.on('event', (packet) => {
            if (packet.event_type === 'player_death') {
                client.queue('respawn', { position: { x: 0, y: 0, z: 0 }, state: 2, runtime_entity_id: client.id })
            }
        });
    }
};