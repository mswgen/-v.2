var serverinfo = async (message) => {
	if (message.cotent === "/해피야 서버 정보" || message.cotent === "/해피야 서버정보" || message.cotent === "/해피야 섭 정보" || message.cotent === "/해피야 섭정보") {
		if (message.guild.region === 'south-korea') {
       var region  = ":flag_kr: 대한민국 (South Korea)"
      } else if (message.guild.region === 'brazil') {
       var region  = ":flag_br: 브라질 (Brazil)"
      } else if (message.guild.region === 'europe') {
        var region = ":flag_eu: 유럽 (Europe)"
      } else if (message.guild.region === 'hongkong') {
        var region = ":flag_hk: 홍콩 (Hong Kong)"
      } else if (message.guild.region === 'india') {
        var region = ":flag_in: 인도 (India)"
      } else if (message.guild.region === "japan") {
        var region = ":flag_jp: 일본 (Japan)"
      } else if (message.guild.region === "russia") {
        var region = ":flag_ru: 러시아 (Russia)"
      } else if (message.guild.region === "singapore") {
        var region = ":flag_sg: 싱가포르 (Singapore)"
      } else if (message.guild.region === "southafrica") {
        var region = ":flag_za: 남아프리카 공화국 (South Africa)"
      } else if (message.guild.region === "sydney") {
        var region = ":flag_au: 시드니 (Sydney)"
      } else if (message.guild.region === "us-central") {
        var region = ":flag_us: 미국 중부 (US Central)"
      } else if (message.guild.region === "us-east") {
        var region = ":flag_us: 미국 동부 (US East)"
      } else if (message.guild.region === "us-south") {
        var region = ":flag_us: 미국 남부 (US South)"
      } else if (message.guild.region === "us-west") {
        var region = ":flag_us: 미국 서부 (US West)"
      }
    let c = message.guild.channels
    let f = "text"
    let d = c.filter(c => c.type == f)
    let o = d.size
    const util = require("util")
    const child = require("child_process")
    const os = require("os")
    const db = require('mongoose').connection
    const moment = require('moment-timezone')
    moment.locale('ko-KR')
    var embed2 = new Discord.RichEmbed()
      .setTitle(`**${message.guild.name} 서버의 이모지 (${message.guild.emojis.size}개)**`)
      .setColor('GREEN')
      .setDescription(`${message.guild.emojis.map(e => e.toString()).join(" ")}`)
    var embed3 = new Discord.RichEmbed()
      .setTitle(`**${message.guild.name} 서버의 역할 (${message.guild.roles.size}개)**`)
      .setColor('GREEN')
      .setDescription(`${message.guild.roles.map(e => e.toString()).join(" ")}`)  
    if (message.guild.systemChannel === null) {
      var ff = "없음"
    } else {
      var ff = message.guild.systemChannel
    }
    if (message.guild.explicitContentFilter === 0) {
        f = "미디어 콘텐츠를 스캔하지 않음";
      } else if (message.guild.explicitContentFilter === 1) {
        f = "역할 없는 멤버의 미디어 콘텐츠를 스캔";
      } else if (message.guild.explicitContentFilter === 2) {
        f = "모든 멤버의 미디어 콘텐츠를 스캔";
      }
      if (message.guild.verificationLevel === 0) {
        verifylv = "제한 없음";
      } else if (message.guild.verificationLevel === 1) {
        verifylv = "이메일이 인증이 완료된 Disocrd 계정";
      } else if (message.guild.verificationLevel === 2) {
        verifylv = "Discord에 가입한 지 5분";
      } else if (message.guild.verificationLevel === 3) {
        verifylv =
          "이 서버에 멤버가 된 지 10분";
      } else if (message.guild.verificationLevel === 4) {
        verifylv =
          "휴대폰 인증이 완료된 Discord 계정";
      }
      if (!message.guild.afkChannel) {
        afk = "없음";
        afktime = 0;
        const embed = new Discord.RichEmbed()
        .setTitle(`**${message.guild.name} 서버의 정보**`)
        .setColor(0x00ff00)
        .setThumbnail(message.guild.iconURL)
        .addField(":crown: 서버 주인", `**${message.guild.owner.user.username}\n(id:${message.guild.owner.user.id})**`, true)
        .addField(":earth_americas: 서버 지역", `**${region}**`)
        .addField(":id: 서버 ID", `**${message.guild.id}**`, true)
        .addField(":man_pouting: 서버 유저", `**ALL:${message.guild.memberCount} (USER:${message.guild.members.filter(member => !member.user.bot).size} | BOT:${message.guild.memberCount - message.guild.members.filter(member => !member.user.bot).size})**`)
        .addField(":birthday: 서버 생일", `**${moment(message.guild.createdAt).tz('Asia/seoul').format('YYYY년 MM월 DD일 dd요일 HH시 mm분')}**`)
        .addField(":speech_balloon: 채팅 채널", `**ALL:${message.guild.channels.size}(CHAT:${o}|CATEGORY:${message.guild.channels.filter(ch => ch.type === 'category').size}|VOICE:${message.guild.channels.filter(ch => ch.type === 'voice').size})**`)
        .addField(":zzz: 잠수 채널", `**${afk}**`)
        .addField(":closed_lock_with_key: 서버 보안", `**${verifylv}**`)
        .addField(":iphone: 2단계 인증", `**${(!message.guild.authentication) ? "없음" : "활성화"}**`)
        .addField(":satellite: 시스템 메세지 채널", `**${ff}**`)
        .addField(":tv: 유해 미디어 콘텐츠 필터", `**${f}**`)
        .addField(":microphone2: 음성 채널에 접속한 수", `**${message.guild.members.filter(member => member.voiceChannel).size}명**`)
        .addField("서버 부스트 레벨", `**${message.guild.members.filter(member => member.boost).size}LVEL**`)
        //.addField("아이디", message.guild.id, true)
        //.addField("나라", message.guild.region, true)
        //.addField("주인", `${message.guild.owner.user.username}\n(id:${message.guild.owner.user.id}`, true)
        //.addField("멤버 수", `전체유저:${message.guild.memberCount} (봇:${message.guild.memberCount - message.guild.members.filter(member => !member.user.bot).size} | 유저:${message.guild.members.filter(member => !member.user.bot).size} )`, true)
        //.addField('생긴 날짜', `**${moment(message.guild.createdAt).tz('Asia/seoul').format('YYYY년 MM월 DD일 dd요일 HH시 mm분')}**`)
        //embed.addField("서버 생성일", message.guild.createdAt, true)
        //embed.addField("서버 주인", message.guild.owner.user.username, true)
        //embed.addField("서버 주인 id", message.guild.owner.user.id, true)
        //embed.addField("서버 위치", message.guild.region, true)
        //embed.addField("서버 인원 수(명)", message.guild.memberCount, true)
        //embed.addField("서버 보안 수준", verifylv, true)
        /*embed.addField(
          "서버 관리에 2단계 인증 필요 여부",
          message.guild.mfaLevel,
          true
        )*/
        //embed.addField("서버 잠수 시간(초)", afktime, true)
        //embed.addField("서버 잠수채널", afk, true)
        //embed.addField("서버 메세지 필터 옵션", f, true)
        embed.setFooter(message.guild.name, message.author.avatarURL)
        embed.setTimestamp();
      message.channel.send(embed);
      message.channel.send(embed3);
      message.channel.send(embed2);
      } else {
        afk = message.guild.afkChannel;
        afktime = message.guild.afkTimeout;
        const embed = new Discord.RichEmbed()
        .setTitle(`**${message.guild.name} 서버의 정보**`)
        .setColor(0x00ff00)
        .setThumbnail(message.guild.iconURL)
        .addField(":crown: 서버 주인", `**${message.guild.owner.user.username}\n(id:${message.guild.owner.user.id})**`, true)
        .addField(":earth_americas: 서버 지역", `**${region}**`)
        .addField(":id: 서버 ID", `**${message.guild.id}**`, true)
        .addField(":man_pouting: 서버 유저", `**ALL:${message.guild.memberCount} (USER:${message.guild.members.filter(member => !member.user.bot).size} | BOT:${message.guild.memberCount - message.guild.members.filter(member => !member.user.bot).size})**`)
        .addField(":birthday: 서버 생일", `**${moment(message.guild.createdAt).tz('Asia/seoul').format('YYYY년 MM월 DD일 dd요일 HH시 mm분')}**`)
        .addField(":speech_balloon: 채팅 채널", `**ALL:${message.guild.channels.size}(CHAT:${o}|CATEGORY:${message.guild.channels.filter(ch => ch.type === 'category').size}|VOICE:${message.guild.channels.filter(ch => ch.type === 'voice').size})**`)
        .addField(":closed_lock_with_key: 서버 보안", `**${verifylv}**`)
        .addField(":zzz: 잠수 채널", `**${afk}**`)
        .addField(":alarm_clock: 잠수 시간 제한", `**${(afktime == 3600) ? `${afktime/3600}시간` : `${afktime/60}분`}**`)
        .addField(":iphone: 2단계 인증", `**${(message.guild.authentication === null) ? "없음" : "활성화"}**`)
        .addField(":satellite: 시스템 메세지 채널", `**${ff}**`)
        .addField(":microphone2: 음성 채널에 접속한 수", `**${message.guild.members.filter(member => member.voiceChannel).size}명**`)
        .addField("서버 부스트 레벨", `**${message.guild.members.filter(member => member.boost).size}LVEL**`)
        //.addField("아이디", message.guild.id, true)
        //.addField("나라", message.guild.region, true)
        //.addField("주인", `${message.guild.owner.user.username}\n(id:${message.guild.owner.user.id}`, true)
        //.addField("멤버 수", `전체유저:${message.guild.memberCount} (봇:${message.guild.memberCount - message.guild.members.filter(member => !member.user.bot).size} | 유저:${message.guild.members.filter(member => !member.user.bot).size} )`, true)
        //.addField('생긴 날짜', `**${moment(message.guild.createdAt).tz('Asia/seoul').format('YYYY년 MM월 DD일 dd요일 HH시 mm분')}**`)
        //embed.addField("서버 생성일", message.guild.createdAt, true)
        //embed.addField("서버 주인", message.guild.owner.user.username, true)
        //embed.addField("서버 주인 id", message.guild.owner.user.id, true)
        //embed.addField("서버 위치", message.guild.region, true)
        //embed.addField("서버 인원 수(명)", message.guild.memberCount, true)
        //embed.addField("서버 보안 수준", verifylv, true)
        /*embed.addField(
          "서버 관리에 2단계 인증 필요 여부",
          message.guild.mfaLevel,
          true
        )*/
        //embed.addField("서버 잠수 시간(초)", afktime, true)
        //embed.addField("서버 잠수채널", afk, true)
        //embed.addField("서버 메세지 필터 옵션", f, true)
        embed.setFooter(message.author.tag, message.author.avatarURL)
        embed.setTimestamp();
      message.channel.send(embed);
      message.channel.send(embed3);
      message.channel.send(embed2);
      }
	}
}

module.exports = serverinfo;
