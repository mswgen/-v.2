var uptime = async (message) => {
	if (message.content === '/해피야 업타임') {
    const embed = new Discord.RichEmbed()
    embed.setTitle(`${client.user.username} 업타임`)
    embed.setColor(0x00ffff)
    embed.setDescription(`**${getUptime()}**`)
    embed.setTimestamp()
    embed.setFooter(message.author.tag, message.author.displayAvatarURL)
    message.channel.send(embed)

    function getUptime() {
        const sec = Math.floor((client.uptime / 1000) % 60).toString()
        const min = Math.floor((client.uptime / (1000 * 60)) % 60).toString()
        const hrs = Math.floor((client.uptime / (1000 * 60 * 60)) % 60).toString()
        const days = Math.floor((client.uptime / (1000 * 60 * 60 * 24)) % 60).toString()
        
        if (days === '0' && hrs === '0' && min === '0') return `${sec.padStart(1, '0')}초`
        else if (days === '0' && hrs === '0') return `${min.padStart(1, '0')}분 ${sec.padStart(1, '0')}초`
        else if (days === '0') return `${hrs.padStart(1, '0')}시간 ${min.padStart(1, '0')}분 ${sec.padStart(1, '0')}초`
        else return `${days.padStart(1, '0')}일 ${hrs.padStart(1, '0')}시간 ${min.padStart(1, '0')}분 ${sec.padStart(1, '0')}초`
    }
  }
}

module.exports = uptime;
