const Discord = require('discord.js');


exports.run = (client, message, args) => {
    function acharNome(nome,guilda){
        if (nome == '' || !nome) return null;
        nome = nome.toLowerCase()
           var a =guilda.members.filter(a => (a.displayName.toLowerCase().indexOf(nome) !=-1 || (nome.indexOf(a.displayName.toLowerCase()) !=-1) && a.displayName.length >= nome.length) || (a.user.username.toLowerCase().indexOf(nome) !=-1 || (nome.indexOf(a.user.username.toLowerCase()) !=-1) && a.user.username.length >= nome.length))
           a = a.sort((a,b) => a.displayName.length -b.displayName.length)
           return  !a.first()? null : a.first()
}



let mention = message.mentions.users.first() || client.users.get(args.join(' ')) || acharNome(args.join(' '), message.guild) || message.author;
let user = mention.user || mention;
  let embed = new Discord.RichEmbed()

    .setDescription(`[Clique aqui](${user.displayAvatarURL}) para baixar o avatar do usuário.`)
    .setImage(user.displayAvatarURL)
    .setColor("RANDOM");
  
  message.channel.send(embed);

}
