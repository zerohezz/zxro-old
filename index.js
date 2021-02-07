const Discord = require('discord.js')
const client = new Discord.Client()

const config = require('./config.json')
const command = require('./command')
const privateMessage = require('./private-message')
client.on('ready', () => {
    console.log('The client is ready!')

    command(client, ['ping','hi'], (message) => {
        message.channel.send('whts up')
    })
  
    // Bot invite

    command(client,'invite',(message) => {
       const embed = new Discord.MessageEmbed()
       .setURL("https://discord.com/oauth2/authorize?client_id=796245884836511774&scope=bot&permissions=2147483647")
        .setTitle('Invite Link')
        message.channel.send(embed)
   })

    command(client, 'embed', (message) => { 
        const embed = new Discord.MessageEmbed().setTitle('Example text embed')

        message.channel.send(embed)
    })
    privateMessage(client, 'ping', 'Pong!')
    
})

client.login(process.env.DJS_TOKEN)
