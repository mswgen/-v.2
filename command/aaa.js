const Discord = require('discord.js');

var aaa = async (message) => {
  if (message.content === '/해피야') {
    var embed = new Discord.RichEmbed()
    embed.addField(`${client.user.username} 채팅기능`, '안녕하세요? 해피트리봇이에요!\n/해피야 도움을 입력해보세요!', true)
    embed.setFooter(message.author.tag, message.author.displayAvatarURL)
    embed.setTimestamp()
    embed.setColor('GREEN')
    message.channel.send(embed);
  }
  if (message.content.startsWith("와!"))   {
    const args = message.content.split(" ").slice(1);
    message.channel.send(args + " 아시는구나!\n참고로 그거 겁.나 어.렵.습.니.다");
  }
  if (message.content.startsWith("국밥") || message.content.startsWith("국밥충"))   {
    const args = message.content.split(" ").slice(1);
    message.channel.send(args + "을(를) 왜먹냐 그걸 먹을바에야 차라리 뜨끈한 국밥 든든하게 먹고말지.");
  }
}

module.exports = aaa;