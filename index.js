const Discord = require('discord.js')
const client = new Discord.Client()

const config = require('./config.json')
const command = require('./command')
const privateMessage = require('./private-message')
client.on('ready', () => {
    console.log('The client is ready!')

    function pickStatus() {
        let status = ['Juice WRLD', 'z.help'];
        let Status = Math.floor(Math.random() * status.length);
        
        client.user.setActivity(status[Status], {
        type: "LISTENING"
        })
        };
        setInterval(pickStatus, 10000);


    command(client, ['ping','hi'], (message) => {
        message.channel.send('whts up')
    })
  
    // Bot invite

    command(client,'invite',(message) => {
       const embed = new Discord.MessageEmbed()
       .setURL("https://discord.com/oauth2/authorize?client_id=796245884836511774&scope=bot&permissions=2147483647")
        .setTitle('Invite Link')
        .setColor('#96ff82')
        message.channel.send(embed)
   })
// embed template
    // command(client, 'embed', (message) => { 
       // const embed = new Discord.MessageEmbed().setTitle('Example text embed')

        //message.channel.send(embed)
  //  })

   command(client,'help',(message) => {
       const embed = new Discord.MessageEmbed()
       s.setTitle('Help Menu')
       s.setColor('#96ff82')
       message.channel.send(embed)
   })


    privateMessage(client, 'ping', 'Pong!')
    
})

client.login(process.env.DJS_TOKEN)
