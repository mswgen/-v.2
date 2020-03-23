var prefix = "/해피야 "
const ytdl = require('ytdl-core');

const queue = new Map();

var play = async (message) => {
  if (message.author.bot) return;
  const serverQueue = queue.get(message.guild.id);
  if (!message.content.startsWith(prefix)) return;
  if (message.content.startsWith(`${prefix}play`)) {
    execute(message, serverQueue);
    return;
  }else if (message.content.startsWith(`${prefix}skip`)) {
    skip(message, serverQueue);
    return;
  } else if (message.content.startsWith(`${prefix}stop`)) {
    stop(message, serverQueue);
    return;
  }
}

module.exports = play;

async function execute(message, serverQueue) {
  const args = message.content.split(' ');

  const voiceChannel = message.member.voiceChannel;
  if (!voiceChannel) return message.channel.send(`${message.author.username}님 음성채널에 있으셔야합니다!`);
  const permissions = voiceChannel.permissionsFor(message.client.user);
  if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
    return message.channel.send('흠... 말할 권한과 들어갈 권한이 업다....');
  }

  const songInfo = await ytdl.getInfo(args[1]);
  const song = {
    title: songInfo.title,
    url: songInfo.video_url,
  };

  if (!serverQueue) {
    const queueContruct = {
      textChannel: message.channel,
      voiceChannel: voiceChannel,
      connection: null,
      songs: [],
      volume: 5,
      playing: true,
    };

    queue.set(message.guild.id, queueContruct);

    queueContruct.songs.push(song);

    try {
      var connection = await voiceChannel.join();
      queueContruct.connection = connection;
      play(message.guild, queueContruct.songs[0]);
    } catch (err) {
      console.log(err);
      queue.delete(message.guild.id);
      return message.channel.send(err);
    }
  } else {
    serverQueue.songs.push(song);
    console.log(serverQueue.songs);
    return message.channel.send(`${song.title} 노래가 곧 재생됩니다(대기열 추가 완료)`);
  }

}

function skip(message, serverQueue) {
  if (!message.member.voiceChannel) return message.channel.send(`${message.author.username}님 음성채널에 있으셔야 음악을 스킵합니다!`);
  if (!serverQueue) return message.channel.send('건너뛸 노래가 없다..');
  serverQueue.connection.dispatcher.end();
}

function stop(message, serverQueue) {
  if (!message.member.voiceChannel) return message.channel.send(`${message.author.username}님 음성채널에 있으셔야 음악을 중지합니다!`);
  serverQueue.songs = [];
  serverQueue.connection.dispatcher.end();
}

function play(guild, song) {
  const serverQueue = queue.get(guild.id);

  if (!song) {
    serverQueue.voiceChannel.leave();
    queue.delete(guild.id);
    return;
  }

  const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
    .on('end', () => {
      console.log('Music ended!');
      serverQueue.songs.shift();
      play(guild, serverQueue.songs[0]);
    })
    .on('error', error => {
      console.error(error);
    });
  dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
}