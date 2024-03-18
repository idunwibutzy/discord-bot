module.exports = {
    name: "ping",
    code: async (msg) => {
        return await msg.reply("pong")
    }
}