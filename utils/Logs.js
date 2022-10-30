let colors = require('colors');
const m = require('moment');
const time = m()
    .locale("fr")
    .format("LTS")

module.exports = {

    /**
     * @param message
     */
    log(message)
    {
        console.log(this.getFormatMessage(message));
    },

    /**
     * @param message
     */
    info(message)
    {
        console.info(this.getFormatMessage(message));
    },

    /**
     * @param message
     */
    warn(message)
    {
        console.warn(this.getFormatMessage(message));
    },

    /**
     * @param message
     */
    error(message)
    {
        console.error(this.getFormatMessage(message));
    },

    getFormatMessage(message)
    {
        return `${colors.cyan(`[${time}]`)} [BOT thread/INFO] => ${message}`;
    }
};