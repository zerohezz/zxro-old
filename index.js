const Discord = require('discord.js')
const client = new Discord.Client()
//const config = require('./config')

client.on('ready', () => {
    console.log('The client is ready!')
})

client.login(process.env.DJS_TOKEN)
