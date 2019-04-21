const { RichEmbed }= require("discord.js"); // npm install discord.js
const moment = require("moment"); // npm install moment
moment.locale('pt-BR'); // Setar a linguagem do moment
exports.run = async (client, message, args) => {
let e = new RichEmbed()
    .setColor("RANDOM")
    .setTitle(`Informação sobre o servidor.`, client.user.displayAvatarURL)
    .addField(`Dono`, `<@${message.guild.ownerID}>`)
    .addField(`Nome do servidor`, `${message.guild.name}`)
    .addField(`ID Do servidor`, `${message.guild.id}`)
    .addField(`Criado em`, `${moment(message.guild.createdAt).format('LLLLL')}`)
    .addField("Total | Humanos | Bots", `${message.guild.members.size} | ${message.guild.members.filter(member => !member.user.bot).size} | ${message.guild.members.filter(member => member.user.bot).size}`)
    .addField(`Região do servidor`, `${message.guild.region}`);
    message.channel.send(e);
}
