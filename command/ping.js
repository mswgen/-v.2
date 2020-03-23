const Discord = require('discord.js');
const client = new Discord.Client();

var ping = async (message) => {
  if (message.content === '/해피야 핑') {
  	var embed = new Discord.RichEmbed()
    embed.setColor('GREEN')
    embed.setTitle(':ping_pong:퐁!')
    embed.setDescription(Math.floor(client.ping) + 'ms')
    message.channel.send(embed)
  }
}

module.exports = ping;