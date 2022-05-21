const Discord = require("discord.js")
require("dotenv").config()

const T0KEN = "NjE5OTc3ODYxNDAyNTkxMjgw.Gm1TOY.FT1QdMU1tCLZaOYpoCTjq6yJYwU3Ymh0PGsTsc"

const client = new Discord.Client({
    intents:[
    "GUILDS",
    "GUILD_MESSAGES",
    "GUILD_MEMBERS"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if(message.content == "oi"){
        message.reply("Olá mafiosos!")
    }
})

client.on("messageCreate", (message) => {
    if(message.content == "por que roberto?"){
        message.reply ("Meus criadores decidiram que meu nome fosse Roberto porque deram um significado para cada letra. **R**edublagem,  **O**limpo,  **B**enifício,  **E**special,  **R**itmo, **T**rabalho, **O**riginalidade. R.O.B.E.R.T.O!")
    }
})

let bot = {
    client,
    prefix:"-",
    owners: ["391339179361173516"]
}

module.exports = bot

client.login(process.env.T0KEN)