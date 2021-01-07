const Discord = require('discord.js')
const client = new Discord.Client()

const config = require('./config.json')
const command = require('./command')

client.on('ready', () => {
    console.log('The client is ready!')

    command(client, ['ping'], (message) => {
        message.channel.send('whts up')
    })
    
    command(client,'embed', (message) => { 
        const embed = new Discord.MessageEmbed().setTitle('Example text embed')

        messsage.channel.send(embed)
    })

})

client.login(process.env.DJS_TOKEN)
