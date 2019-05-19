const Discord = require('discord.js'); // npm install discord.js
const client = new Discord.Client();
const config = require('./config.json') 
const Enmap = require('enmap') // npm install enmap
var fs = require('fs'); // npm install fs

client.commands = new Discord.Collection();//se você definiu "client", troque "bot" por client!
client.aliases = new Discord.Collection();

client.on('ready', () => {
  console.log(`Conectado com sucesso ${client.user.tag}!`);
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
