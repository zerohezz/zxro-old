const Discord = require('discord.js')
const client = new Discord.Client()

const config = require('./config.json')
const command = require('./command')

client.on('ready', () => {
    console.log('The client is ready!')

    command(client, ['ping', 'hi'], (message) => {
        message.channel.send('whts up')
    })
})

client.login(process.env.DJS_TOKEN)
