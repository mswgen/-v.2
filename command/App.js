const Discord = require('discord.js');

var app = async (message) => {
	var ping = require('./client/ping.js');
	var ping = ping(message);
	var aaa = require('./client/aaa.js');
	var aaa = aaa(message);
	var uptime = require('./client/uptime.js');
	var uptime = uptime(message);
	var serverinfo = require('./info/serverinfo.js');
	var serverinfo = serverinfo(message);
	var music = require("./music/play.js");
	var music = play(message)
}

module.exports = app;
