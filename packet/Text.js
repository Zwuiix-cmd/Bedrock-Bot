
//
//  Le text packet doit contenir:
//      => type: (string)
//      => needs_translation: (bool)
//      => source_name: (string|void)
//      => xuid: (string|void)
//      => platform_chat_id: (string)
//      => message: (string)
//
// @Zwuiix-cmd#0001

module.exports = {
    create(client, type, needsTranslation, username, xuid, platformChatId, message)
    {
        client.queue('text', {
            type: type,
            needs_translation: needsTranslation,
            source_name: username,
            xuid: xuid,
            platform_chat_id: platformChatId,
            message: message
        });
    }
};