const {exec} = require("child_process")
const { stdout, stderr } = require("process")

module.exports = {
    name: "$",
    code : async (msg) => {
        const command = msg.content.split(" ").slice(1).join(" ");
        try{
            exec(command, async (error, stdout, stderr) => {
                if(error) await msg.reply(error)
                else if(stderr) await msg.reply(stderr)
                else if(!stdout) return
                else await msg.reply(stdout)
            })
        }catch(err){
            console.error(err)
        }
    }
}