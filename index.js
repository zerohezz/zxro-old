const Discord = require('discord.js')
const client = new Discord.Client()

const config = require('./config.json')
const command = require('./command')
const privateMessage = require('./private-message')
client.on('ready', () => {
    console.log('The client is ready!')
    bot.user.setActivity('Listeing to Juice WRLD')

    command(client, ['ping','hi'], (message) => {
        message.channel.send('whts up')
    })
    
    command(client, 'embed', (message) => { 
        const embed = new Discord.MessageEmbed().setTitle('Example text embed')

        message.channel.send(embed)
    })
    privateMessage(client, 'ping', 'Pong!')
    
})

client.login(process.env.DJS_TOKEN)
