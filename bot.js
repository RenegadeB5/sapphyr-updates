const Discord = require('discord.js');
const prefix = ".";
var client = new Discord.Client();
var NOTIFY_CHANNEL;

client.on('ready', () => {
    const guildNames = client.guilds.map(g => g.name).join("\n")
    client.user.setPresence({ game: { name: process.env.playing, type: 0 } });
    console.log('successfully Logged In As Link Bot!');
    NOTIFY_CHANNEL = client.channels.find("name", "member-links");
});
client.on ('message', message => {
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();  
  if (command === "link") {
      let link = args.slice(0).join(' ');
      let region = args.slice(1).join(' '); 
      let gamemode = args.slice(2).join(' ');
      let verify = message.guild.roles.find("name", "link access")
      if (message.member.roles.has(verify.id)) {
          if (link.substr(0, 8) === 'https://') {
              let owner = '<@' + message.author.id + '>'
              const embed = new Discord.RichEmbed()
              .setColor(0x00FF00)
              .setFooter('Link created by' + ' ' + owner)
              .setTitle('Party Link')
              .addField("Region", region, true)
              .addField("Gamemode", gamemode, true)
              .addField("Link", link, true)
              .setURL(link)
              .setTimestamp()
              NOTIFY_CHANNEL.send({embed});
              message.react('🔗')
          }
          else {
              message.channel.send('Please include \"https://\" in your link.');
          }
      }
      else {
              message.author.send('You are not authorized to recieve links.');
          }
          
}});    

client.on ('message', message => {
  if (message.content === "Crackhead") {
    message.channel.send('white');
  }
});

client.on ('message', message => {
  if (message.content === "!list roles") {
           var role = message.guild.roles.array();
           console.log(role);
  }
});
client.login(process.env.BOT_TOKEN);
