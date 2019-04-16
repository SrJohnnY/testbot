const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    const  api_latency = Math.round(client.ping);
    
    let embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription(`Pong! ${api_latency}ms`);
        message.channel.send(embed);
    }