const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json')
const Enmap = require('enmap')
var fs = require('fs');

client.commands = new Discord.Collection();//se você definiu "client", troque "bot" por client!
client.aliases = new Discord.Collection();

client.on('ready', () => {
  console.log(`Conectado com sucesso ${client.user.tag}!`);
  setInterval(() => {
    let a = ["💬 Fui desenvolvido por: !</JohnnY>!#8139", "y.ajuda | (v1.7.6)", "Estou em uma versão beta!"];
    let b = a[Math.floor(Math.random() * a.length)];
    client.user.setActivity(b, {type: 'STREAMING', url: 'https://www.twitch.tv/johnn123__'} );
    }, 9000);
});

client.commands = new Enmap();
 
  fs.readdir("./commands/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      if (!file.endsWith(".js")) return;
      let props = require(`./commands/${file}`);
      let commandName = file.split(".")[0];
      console.log(`[Comando ${commandName}] Carregado!`);
      client.commands.set(commandName, props);
    });
  });

client.on('message', message => {
  let args = message.content.split(' ');
  let comando = args.shift().slice(config.prefix.length).toLowerCase();
  if (!message.content.startsWith(config.prefix)) return

  let cmd = client.commands.get(comando) || client.commands.get(client.aliases.get(comando));
  if (cmd) {
    cmd.run(client, message, args) //Executa o comando
  } // É Normal dar um erro no enmap, não se preoucupem, porque tbm passei por isso kkk
});

client.login(config.token);