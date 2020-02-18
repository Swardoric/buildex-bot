const Discord = require('discord.js'); //Ce que le bot à besoin /
const client = new Discord.Client(); //Que votre Bot est un nouvel utilisateur
var prefix = "*"; //Prefix de votre Bot ( *play www.youtube.com/ )
client.login("NjEzODA5OTI3MzU3NTk1Njgw.XV2XrA.gGOVe7VP6BKdHAh1n-kPzpnUAzE"); //Token (Série de chiffre) propre a chaque Bot
client.on("ready", () => { //Signifie que le bot à bien démarré 
console.log("Je suis prêt !"); //Lorsque que le bot est lancé observer la console Visual Studio 
//client.user.setGame("s'Update seul"); //Voir le Jeu sur le Discord
});

/* client.on('message', (receivedMessage) => {
    // Prevent bot from responding to its own messages
    if (receivedMessage.author == client.user) {
        return
    }

    receivedMessage.channel.send("Message received: " + receivedMessage.content)
}) */

client.on("message", (message) => {
    // Exit and stop if it's not there
    if (!message.content.startsWith(prefix)) return;

    if (message.content.startsWith(prefix + "creeper")) {
      message.channel.send("aw man");
    } else

    if (message.content.startsWith(prefix + "so we back in the mine")) {
      message.channel.send("ok non lo");
    } else

    if (message.member.roles.some(role => role.name === 'STAFF')) {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    var args = message.content.slice(prefix.length).split(' ');
    var command = args.shift().toLowerCase();
    if (command === 'builder') {
      var role = message.guild.roles.find(role => role.name === `Apprenti builder`)
      if (!args.length) {
        return message.channel.send(`yo donne moi plus d'infos, ${message.author}!`);
      }
      const taggedUser = message.mentions.members.first();
      taggedUser.addRole(role)
      message.channel.send(`${taggedUser.user} a été promu ${role.name} par ${message.author}!`);
      message.delete(message)
    } else

    if (!message.content.startsWith(prefix) || message.author.bot) return;
    var args = message.content.slice(prefix.length).split(' ');
    var command = args.shift().toLowerCase();
    if (command === 'scripter') {
      var role = message.guild.roles.find(role => role.name === `Apprenti scripter`)
      if (!args.length) {
        return message.channel.send(`yo donne moi plus d'infos, ${message.author}!`);
      }
      const taggedUser = message.mentions.members.first();
      taggedUser.addRole(role)
      message.channel.send(`${taggedUser.user} a été promu ${role.name} par ${message.author}!`);
      message.delete(message)
    } else

    if (!message.content.startsWith(prefix) || message.author.bot) return;
    var args = message.content.slice(prefix.length).split(' ');
    var command = args.shift().toLowerCase();
    if (command === 'dev') {
      var role = message.guild.roles.find(role => role.name === `Apprenti développeur`)
      if (!args.length) {
        return message.channel.send(`yo donne moi plus d'infos, ${message.author}!`);
      }
      const taggedUser = message.mentions.members.first();
      taggedUser.addRole(role)
      message.channel.send(`${taggedUser.user} a été promu ${role.name} par ${message.author}!`);
      message.delete(message)
    } else

    if (message.content.startsWith(prefix + "help")) {
      message.channel.send("Pour donner des rôles, faire soit: *builder @user, *dev @user ou *scripter @user.");
    }
  }
});