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
      let gamemode = args[0];
      let region = args[1];
      let link = args[2];
      let verify = message.guild.roles.find("name", "link access")
      if (message.member.roles.has(verify.id)) {
          if (link.substr(0, 8) === 'https://') {
              let owner = message.member.user.tag
              const embed = new Discord.RichEmbed()
              .setColor(0x00FF00)
              .setURL(link)
              .setFooter('diep.io party link.')
              .setTitle('Party Link')
              .setAuthor(owner)
              .addField("Region", region, true)
              .addField("Gamemode", gamemode, true)
              .addField("Link", link, true)
              .setTimestamp()
              NOTIFY_CHANNEL.send({embed})
              .then(function (message) {
                  message.react('🔗')
                  });
          }
          else {
              message.channel.send('Please include \"https://\" in your link.');
          }
      }
      else {
              message.author.send('You are not authorized to recieve links.');
          }          
}});    

client.on('messageReactionAdd', (reaction, user) => {
    if(reaction.emoji.name === "🔗") {
        let dm = reaction.users.map(r => r.id);
        let dmsend = dm[dm.length-1];
        let party = reaction.users.map(r => r.lastMessageID);
        let partysend = party[0];
        if (dmsend === '407593823921766410') {
            return;
        }
        else {
            reaction.message.channel.fetchMessage(partysend)          
               .then(fetchedMessage => console.log(fetchedMessage.embeds))
            let linksend = reaction.message.channel.fetchMessage(partysend).embeds
            let linksent = linksend
            console.log('----------------------------------------------');
            console.log(linksend);
            client.users.get(dmsend).send("someMessage");
        }
    }
});

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
