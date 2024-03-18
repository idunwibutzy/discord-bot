const { Client, GatewayIntentBits } = require('discord.js');
const fs = require('fs')
require('dotenv').config();

const client = new Client({
    intents: [
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.Guilds,
        GatewayIntentBits.MessageContent
    ]
});

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on("messageCreate", async msg => {
    if(!msg.content) return
    
    try{
        const path = "./commands"
        
        const files = fs.readdirSync(path)
        files.forEach( file => {
            const data = require(`${path}/${file}`)
            if(msg.content.toLowerCase().split(' ')[0] === data.name){
                data.code(msg)
            }
        })
    }catch(error){
        console.error(error)
    }
})

client.login(process.env.TOKEN)
