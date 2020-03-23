const Discord = require('discord.js');
const client = new Discord.Client();
const {
	token
} = require('./config.json')

client.on('ready', () => {
  console.log(`Login ${client.user.username}\n----------------------------`)
  const botgame = [ `${client.guilds.size}개의 서버 | ${client.users.size}명의 유저 | ${client.channels.size}개의 채팅 채널과 함께하고 있어요!`, `'/해피야 도움' 입력`, `이 메세지는 10초마다 랜덤으로 바뀌어요!` ]

  setInterval(() => {
    let activity = botgame[Math.floor(Math.random() * botgame.length)]
    client.user.setActivity(activity, { type: "PLAYING" })
  }, 10000)
});

client.on("message", async (message) => {
  var app = require("./command/App.js")
  var app = app(message, client)
});

client.login(token);